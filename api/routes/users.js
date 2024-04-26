import express from "express";
import {
	createUser,
	deleteUser,
	editUser,
	getUser,
	getUserKontraks,
	getUsers,
} from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/", verifyAdmin, createUser);

router.put("/:id", verifyUser, editUser);

router.delete("/:id", verifyAdmin, deleteUser);

router.get("/:id", verifyUser, getUser);

router.get("/", verifyAdmin, getUsers);

router.get("/:id/kontrak", verifyUser, getUserKontraks);

export default router;
