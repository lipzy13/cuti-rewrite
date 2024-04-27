import express from "express";
import {
	createCuti,
	deleteCuti,
	editCuti,
	getAllCuti,
	getCuti,
} from "../controllers/cuti.js";

const router = express.Router();

router.post("/:kontrakId", createCuti);

router.put("/:id", editCuti);

router.delete("/:kontrakId/:cutiId", deleteCuti);

router.get("/:id", getCuti);

router.get("/", getAllCuti);

export default router;
