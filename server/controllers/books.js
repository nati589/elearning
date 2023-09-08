import { db } from "../db.js";
import fs from "fs";
import { v4 as uuidv4 } from "uuid";

export const getBooks = (req, res) => {
    const q = "select * from book";
    db.query(q, (err, data) => {
      if (err) {
        res.json(err);
        console.log(err);
      } else {
        res.json(data);
      }
    });
};

export const addBook = (req, res) => {
  // console.log(req.body)
  // console.log(req.file)
  const bookId = uuidv4();
  const values = Object.values(req.body);
  values.unshift(bookId);
  const q =
    "INSERT INTO book (book_id, book_title, book_details, book_author, book_price) VALUES (?, ?, ?, ?, ?)";
  db.query(q, values, (err, data) => {
    if (err) {
      res.json(err);
      console.log(err);
    } else {
      //   res.json(data);
      console.log(data);
    }
  });

  const book_thumbnail = req.file; // File object

  // Generate a new file name
  const originalFileName = book_thumbnail.originalname;
  const fileExtension = originalFileName.split(".").pop();
  const newFileName = `${bookId}.${fileExtension}`;

  // Construct the new file path
  const newFilePath = `books/thumbnails/${newFileName}`;

  // Rename the file
  fs.rename(book_thumbnail.path, newFilePath, (err) => {
    if (err) {
      // Handle the error
      console.error(err);
      return res.status(500).json({ message: "Error renaming the file" });
    }

    res.json({ message: "Book added successfully" });
  });
};
