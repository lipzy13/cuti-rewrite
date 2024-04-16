import express from "express";
import {
  createKontrak,
  deleteKontrak,
  editKontrak,
  getKontrak,
  getKontrakByUser,
  getKontrakByUserId,
} from "../controllers/kontrak.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/", verifyAdmin, createKontrak);

router.put("/:id", verifyUser, editKontrak);

router.delete("/:id", verifyAdmin, deleteKontrak);

router.get("/:id", getKontrak);

router.get("/user/:userId", getKontrakByUserId);

router.get("/:userId/:kontrakId", getKontrakByUser);

export default router;
