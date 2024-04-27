import express from "express";
import {
	createKontrak,
	deleteKontrak,
	editKontrak,
	getCutiByKontrak,
	getKontrak,
} from "../controllers/kontrak.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/:userId", createKontrak);

router.get("/:kontrakId/cuti", getCutiByKontrak);

router.put("/:id", editKontrak);

router.delete("/:userId/:kontrakId", deleteKontrak);

router.get("/:id", getKontrak);

export default router;
