import express from "express";
import { enrollStudent } from "../controllers/enroll.js";

const router = express.Router();

router.post("/enrollStudent", enrollStudent);

export default router;
