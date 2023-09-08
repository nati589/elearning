import express from "express";
import {
  getCourses,
  addCourse,
  updateCourse,
  deleteCourse,
  getCoursesThisYear,
} from "../controllers/courses.js";

const router = express.Router();

router.put("/updateCourse", updateCourse);
router.delete("/deleteCourse", deleteCourse);
router.post("/addCourse", addCourse);
router.get("/getCourses", getCourses);
router.get("/getCoursesThisYear", getCoursesThisYear);

export default router;
