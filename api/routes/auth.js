import express from "express";
import { changePassword, login, register } from "../controllers/auth.js";
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/changepass/:id", changePassword);
export default router;
