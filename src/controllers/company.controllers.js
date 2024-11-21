import { pool } from "../db.js";

export const getCompanies = async (req, res) => {
	const { rows } = await pool.query("SELECT * FROM company");
	if (rows.length === 0) {
		res.status(404).json({ message: "Rows not found" });
	}
	res.json(rows);
};

export const getCompany = async (req, res) => {
	const { id } = req.params;
	const { rows } = await pool.query(`SELECT * FROM company WHERE id = ${id}`);

	if (rows.length === 0) {
		res.status(404).json({ message: "Rows not found" });
	}
	res.json(rows[0]);
};

export const createCompany = async (req, res) => {
	try {
		const data = req.data;
		const { rows } = await pool.query(
			"INSERT INTO users (name, company_user, password, number) VALUES ($1, $2, $3, $4 ) RETURNING *",
			[data.name, data.company_user, data.password, data.number],
		);
		return res.json(rows);
	} catch (error) {
		if (error.code === "23505") {
			return res.status(409).json({ message: "Tienes una llave duplicada" });
		}
		return res.status(500).json({ message: "Internal server error" });
	}
};

export const deleteCompany = async (req, res) => {
	const { id } = req.params;
	const { rowCount } = pool.query(
		`DELETE FROM company WHERE id = ${id} RETURNING *`,
	);

	if (rowCount.length === 0) {
		return res.status(404).json({ message: "Row not found" });
	}

	return res.json({ message: `Row with id ${id} deleted` });
};

export const updateCompany = async (req, res) => {
	const { id } = req.params;
	const data = req.body;
	const { rows } = pool.query(
		"UPDATE users SET name = $1, company_user = $2, password = $3, number = $4  WHERE id = $5",
		[data.name, data.company_user, data.parseInt, data.number, id],
	);

	return res.json(rows);
};
