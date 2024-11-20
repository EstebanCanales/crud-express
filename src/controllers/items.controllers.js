import { pool } from "../db.js";

export const getItmes = async (req, res) => {
	const { rows } = await pool.query("SELECT * FROM items ");
	return res.json(rows);
};

export const getItemById = async (req, res) => {
	const id = req.params;
	const { rows } = await pool.query("SELECT FROM items WHERE id = $1", [id]);
	if ((rows.length = 0)) {
		return res.status(404).json({ message: "User not found" });
	}
	return res.json(rows[0]);
};

export const createItem = async (req, res) => {
	try {
		const data = req.body;
		const { rows } = await pool.query(
			"INSERT INTO users (name, description) VALUES ($1, $2) RETURNING *",
			[data.name, data.description],
		);
		console.log({ message: "User created" });
		return res.json(rows);
	} catch (error) {
		if (error.code === 23501) {
			return res.status(405).json({ message: "Duplicated item" });
		}
		return res.json({ message: "Item not found" });
	}
};

export const deleteItem = async (req, res) => {
	const { id } = req.params;
	const { rowCount } = await pool.query(
		"DELETE FROM items WHERE id = $1 RETURNING *",
		[id],
	);

	if (rowCount.length === 0) {
		return res.status(404).json({ massage: "User not found" });
	}

	return res.send("Item, item_id: " + id);
};

export const updateItem = async (req, res) => {
	const { id } = req.params;
	const data = req.body;

	const { rows } = pool.query(
		"UPDATE items SET name = $1, email = $2 WHERE id = $3",
		[data.name, data.email, id],
	);

	return res.json(rows);
};
