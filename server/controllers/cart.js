import { db } from "../db.js";
import multer from "multer";
import * as path from "path";
import bcrypt from "bcryptjs";
import { v4 as uuidv4 } from "uuid";

export const getCart = (req, res) => {
  const { user_id } = req.body;
  const q = "SELECT * FROM cart WHERE user_id = ?";

  db.query(q, [user_id], (err, data) => {
    if (err) {
      return res.status(401).send({ message: "Connection error. Try again!" });
    } else {
      if (data.length === 0) {
        return res.status(200).send({ empty: true });
      } else {
        return res.status(200).send({ empty: false, cart: data });
      }
    }
  });
};

export const deleteFromCart = (req, res) => {};

export const addToCart = (req, res) => {
  const { course_id, user_id, book_id } = req.body;
  const cart_id = uuidv4();
  const q = `INSERT INTO cart (cart_id, course_id, user_id, book_id ) VALUES (?,?,?,?)`;

  db.query(q, [cart_id, course_id, user_id, book_id], (err, data) => {
    if (err) {
      // console.log(err, "error");
      return res
        .status(401)
        .send({ message: "Error adding to cart. Try again!" });
    } else {
      // console.log(data, "data");
      return res.status(200).send({ message: "Added to cart!" });
    }
  });
};

export const checkCourse = (req, res) => {
  const { course_id } = req.body;
  const q = `SELECT * from cart WHERE course_id = ?`;
  console.log(req.body);

  db.query(q, [course_id], (err, data) => {
    if (err) {
      return res.status(401).send({ message: "Error Checking in Cart!" });
    } else {
      if (data.length === 0) {
        return res.status(200).send({ message: false });
      } else {
        return res.status(200).send({ message: true });
      }
    }
  });
};

export const checkBook = (req, res) => {
  const { book_id } = req.body;
  const q = `SELECT * from cart WHERE book_id = ?`;
  console.log(req.body);

  db.query(q, [book_id], (err, data) => {
    if (err) {
      return res.status(401).send({ message: "Error Checking in Cart!" });
    } else {
      if (data.length === 0) {
        return res.status(200).send({ message: false });
      } else {
        return res.status(200).send({ message: true });
      }
    }
  });
};
