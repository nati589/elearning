import express from "express";
import {
  getCart,
  deleteFromCart,
  addToCart,
  checkCourse,
  checkBook,
} from "../controllers/cart.js";

const router = express.Router();

router.post("/getCart", getCart);
router.delete("/deleteFromCart", deleteFromCart);
router.post("/addToCart", addToCart);
router.post("/checkCourse", checkCourse);
router.post("/checkBook", checkBook);

export default router;
