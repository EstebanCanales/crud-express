import express from "express";
import {
	createItem,
	deleteItem,
	getItemById,
	getItmes,
	updateItem,
} from "../controllers/items.controllers";

const router = express.Router();

router.get("/items", getItmes);

router.get("/items/:id", getItemById);

router.post("/items", createItem);

router.delete("/items/:id", deleteItem);

router.put("/items/:id", updateItem);

export default router;
