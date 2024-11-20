import pg from "pg";
import { DATABASE, HOST, USER, DB_PORT, PASSWORD } from "./config.js";

export const pool = new pg.Pool({
	user: USER,
	host: HOST,
	password: PASSWORD,
	database: DATABASE,
	port: DB_PORT,
});
