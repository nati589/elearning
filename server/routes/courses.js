import express from "express";
import {
  getCourses,
  addCourse,
  updateCourse,
  deleteCourse,
  getCoursesThisYear,
  getSingleCourse,
  getTotalCourses,
  getCouresThisWeek,
  getCouresThisMonth,
} from "../controllers/courses.js";
import multer from "multer";
const upload = multer({ dest: "courses/thumbnails/" });

const router = express.Router();

router.put("/updateCourse", updateCourse);
router.delete("/deleteCourse", deleteCourse);
router.post("/addCourse", upload.single("course_thumbnail"), addCourse);
router.get("/getCourses", getCourses);
router.get("/getTotalCourses", getTotalCourses);
router.get("/getSingleCourse", getSingleCourse);
router.get("/getCoursesThisYear", getCoursesThisYear);
router.get("/");
///////////// Get The admin Info Route//////////////////
router.get("/getCoursesThisWeek", getCouresThisWeek);
router.get("/getCoursesThisMonth", getCouresThisMonth);

export default router;
