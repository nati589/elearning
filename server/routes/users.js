import express from "express";
import {
  getUsers,
  addUser,
  updateUser,
  deleteUser,
  getUsersThisYear,
} from "../controllers/users.js";

const router = express.Router();

router.get("/getUsers", getUsers);
router.get("/getUsersThisYear", getUsersThisYear);
router.put("/updateUser", updateUser);
router.delete("/deleteUser", deleteUser);
router.post("/addUser", addUser);

export default router;
