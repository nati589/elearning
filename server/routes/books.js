import express from "express";
import { getBooks, addBook } from "../controllers/books.js";
import multer from "multer";
const upload = multer({ dest: 'books/thumbnails/' });

const router = express.Router();

router.get('/getBooks', getBooks);
// router.put('/updateMember', updateMember);
// router.delete('/deleteMember', deleteMember);
router.post('/addBook', upload.single('book_thumbnail'), addBook);

export default router