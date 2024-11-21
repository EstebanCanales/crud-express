import express from "express";
const router = express.Router();
import {
	createCompany,
	deleteCompany,
	getCompanies,
	getCompany,
} from "../controllers/company.controllers.js";

router.get("/company", getCompanies);

router.get("/company/:id", getCompany);

router.post("/company", createCompany);

router.delete("/company/:id", deleteCompany);

router.put("/company/:id", createCompany);

export default router;
