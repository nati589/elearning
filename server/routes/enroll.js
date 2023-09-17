import express from "express";
import { enrollStudent, purchaseBook } from "../controllers/enroll.js";

const router = express.Router();

router.post("/enrollStudent", enrollStudent);
router.post("/purchaseBook", purchaseBook);

export default router;
