import express from "express";
import {
  createCuti,
  deleteCuti,
  editCuti,
  getAllCuti,
  getCuti,
} from "../controllers/cuti.js";

const router = express.Router();

router.post("/", createCuti);

router.put("/:id", editCuti);

router.delete("/:id", deleteCuti);

router.get("/:id", getCuti);

router.get("/", getAllCuti);

export default router;