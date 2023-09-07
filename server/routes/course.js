import express from "express";
import {
  getCourses,
  addCourses,
  updateCourse,
  deleteCourse,
} from "../controllers/users.js";

const router = express.Router();

router.get("/getCourses", getCourses);
router.put("/updateCourse", updateCourse);
router.delete("/deleteCourse", deleteCourse);
router.post("/addCourses", addCourses);

export default router;
