import express from "express";
import {
  getCourses,
  addCourse,
  updateCourse,
  deleteCourse,
  getCoursesThisYear,
  getSingleCourse,
} from "../controllers/courses.js";
import multer from "multer";
const upload = multer({ dest: "courses/thumbnails/" });

const router = express.Router();

router.put("/updateCourse", updateCourse);
router.delete("/deleteCourse", deleteCourse);
router.post("/addCourse", upload.single("course_thumbnail"), addCourse);
router.get("/getCourses", getCourses);
router.get("/getSingleCourse", getSingleCourse);
router.get("/getCoursesThisYear", getCoursesThisYear);
router.get("/")

export default router;
