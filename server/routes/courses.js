import express from "express";
import { getCourses, getCoursesThisYear } from "../controllers/courses.js";
// import { getBooks, addBook } from "../controllers/books.js";
// import multer from "multer";
// const upload = multer({ dest: 'books/thumbnails/' });

const router = express.Router();

router.get("/getCourses", getCourses);
router.get("/getCoursesThisYear", getCoursesThisYear);
// router.put('/updateMember', updateMember);
// router.delete('/deleteMember', deleteMember);
// router.post('/addBook', upload.single('book_thumbnail'), addBook);

export default router;
