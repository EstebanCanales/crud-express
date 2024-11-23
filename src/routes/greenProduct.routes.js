import express from "express";
import {
	createGreenProduct,
	deleteGreenProduct,
	getGreenProduct,
	getGreenProducts,
	updateGreenProduct,
} from "../controllers/greenProduct.controllers.js";
const router = express.Router();

router.get("/greenProduct", getGreenProducts);

router.get("/greenProduct/:id", getGreenProduct);

router.delete("/greenProduct/:id", deleteGreenProduct);

router.post("/greenProduct", createGreenProduct);

router.put("/greenProduct/:id", updateGreenProduct);

export default router;
