import express from "express";
import { signUp } from "../controllers/auth.controller.js";

const router = express.Router();

//signup route
router.post("/signup", signUp);

export default router;
