import { pool } from "../db.js";

export const getUser = async (req, res) => {
	const { rows } = await pool.query("SELECT * FROM users");
	res.json(rows);
};

export const getUserById = async (req, res) => {
	const { id } = req.params;
	const { rows } = await pool.query(`SELECT * FROM users WHERE id = ${id}`);

	if (rows.length === 0) {
		return res.status(404).json({ massage: "User not found" });
	}

	return res.json(rows[0]);
};

export const createUser = async (req, res) => {
	try {
		const data = req.body;
		const { rows } = await pool.query(
			"INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *",
			[data.name, data.email],
		);

		return res.json(rows);
	} catch (error) {
		if (error.code === "23505") {
			return res.status(409).json({ message: "Tienes una llave duplicada" });
		}
		return res.status(500).json({ message: "Internal server error" });
	}
};

export const deleteUser = async (req, res) => {
	const { id } = req.params;
	const { rowCount } = await pool.query(
		"DELETE FROM users WHERE id = $1 RETURNING *",
		[id],
	);

	if (rowCount.length === 0) {
		return res.status(404).json({ massage: "User not found" });
	}

	return res.send("Usuario eliminado " + id);
};

export const updateUser = async (req, res) => {
	const { id } = req.params;
	const data = req.body;
	const { rows } = pool.query(
		"UPDATE users SET name = $1, email = $2 WHERE id = $3",
		[data.name, data.email, id],
	);

	return res.json(rows);
};
