import express from "express";
const router = express.Router();
import {
	createUser,
	getUser,
	getUserById,
	updateUser,
	deleteUser,
} from "../controllers/user.controllers.js";

router.get("/users", getUser);

router.get("/users/:id", getUserById);

router.post("/users", createUser);

router.delete("/users/:id", deleteUser);

router.put("/users/:id", updateUser);

export default router;
