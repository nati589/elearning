import { db } from "../db.js";
import fs from "fs";
import { v4 as uuidv4 } from "uuid";

export const getCourses = (req, res) => {
  const q = "SELECT * FROM course";
  db.query(q, (err, data) => {
    if (err) {
      return res
        .status(401)
        .send({ message: "Connection error try again.", data: result });
    } else {
      res.json(data);
    }
  });
};
export const getCoursesThisYear = (req, res) => {
  const q = `
    SELECT *
    FROM course
    WHERE YEAR(course_date_created) = YEAR(CURRENT_DATE)
  `;
  db.query(q, (err, data) => {
    if (err) {
      return res
        .status(401)
        .send({ message: "Connection error try again.", data: result });
    } else {
      res.json(data);
    }
  });
};

export const addCourse = (req, res) => {};
export const updateCourse = (req, res) => {};
export const deleteCourse = (req, res) => {};
