import { pool } from "../db.js";

export const getGreenProducts = async (req, res) => {
	const { rows } = pool.query("SELECT * FROM green_product");
	return res.json(rows);
};

export const getGreenProduct = async (req, res) => {
	const { id } = req.params;
	const { rows } = pool.query("SELECT FROM green_product  WHERE id = $1", [id]);

	if (rows.leght === 0) {
		return res.json({ message: "Product no found" });
	}

	return res.json(rows);
};

export const deleteGreenProduct = async (req, res) => {
	const { id } = req.params;
	const { countRows } = pool.query("DELETE FROM green_product WHRE id = $1", [
		id,
	]);

	if (rows.leght === 0) {
		return res.json({ message: "Product no found" });
	}

	return res.json(countRows);
};

export const createGreenProduct = async (req, res) => {
	try {
		const data = req.body;
		const { rows } = await pool.query(
			"INSERT INTO green_product (name, expire_date, type, price) VALUES ($1, $2, $3, $4) RETURNING *",
			[data.name, data.expire_date, data.type, data.price],
		);

		console.log({ message: "Product created" });

		return res.json(rows);
	} catch (error) {
		if (error.code === 23501) {
			return res.status(405).json({ message: "Duplicated item" });
		}
		return res.json({ message: "Item not found" });
	}
};

export const updateGreenProduct = async (req, res) => {
	const { id } = req.params;
	const data = req.body;

	const { rows } = pool.query(
		"UPDATE green_product SET name = $1, expire_date = $2, type = $3, price = $4 WHERE id = $5",
		[data.name, data.expire_date, data.type, data.price, id],
	);

	return res.json(rows);
};
