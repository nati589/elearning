import express from "express";
import {
  login,
  logout,
  checkLogin,
  checkAdminLogin,
  loginAdmin,
} from "../controllers/auth.js";

const router = express.Router();

router.post("/login", login);
router.get("/logout", logout);
router.get("/check-login", checkLogin);
////////////////admin Login dont touch it////////////////
router.post("/loginAdmin", loginAdmin);
router.get("/checkAdminLogin", checkAdminLogin);

export default router;
