import express from "express";
import {
  getUsers,
  addUser,
  updateUser,
  deleteUser,
} from "../controllers/users.js";

const router = express.Router();

router.get("/getUsers", getUsers);
router.put("/updateUser", updateUser);
router.delete("/deleteUser", deleteUser);
router.post("/addUser", addUser);

export default router;
