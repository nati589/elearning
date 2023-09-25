import { db } from "../db.js";
import multer from "multer";
import * as path from "path";
import bcrypt from "bcryptjs";
import { v4 as uuidv4 } from "uuid";

export const getGrades = (req, res) => {
  const q = "SELECT * FROM user";

  db.query(q, (err, data) => {
    if (err) {
      res.json(err);
    } else {
      res.json(data);
    }
  });
};

// export const getUserById = (req, res) => {};

export const addGrade = (req, res) => {
    console.log(req.body)
    const q = "";
  db.query(q, req.params.id, (err, data) => {
    if (err) {
      res.json(err);
    } else {
      res.json(data);
    }
  });
};

export const updateGrade = (req, res) => {};

export const deleteGrade = (req, res) => {
  const q = " DELETE FROM grade WHERE grade_id=?";
  db.query(q, req.params.id, (err, data) => {
    if (err) {
      res.json(err);
    } else {
      res.json(data);
    }
  });
};
