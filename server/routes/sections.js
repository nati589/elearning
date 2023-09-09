import express from "express";
import {
  getSections,
  addSection,
  updateSection,
  deleteSection,
  getSingleSection,
  getCourseSections
} from "../controllers/sections.js";
import multer from "multer";
const upload = multer({ dest: "sections/files/" });

const router = express.Router();

router.put("/updateSection", updateSection);
router.delete("/deleteSection", deleteSection);
router.post("/addSection", upload.single("course_thumbnail"), addSection);
router.get("/getSections", getSections);
router.get("/getSingleSection/:id", getSingleSection);
router.get("/getCourseSections/:id", getCourseSections);
router.get("/");

export default router;
