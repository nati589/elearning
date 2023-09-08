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

export const addCourse = (req, res) => {
  // console.log(req.body);
  // console.log(req.file);
  const course_id = uuidv4();
  const values = Object.values(req.body);
  values.unshift(course_id);

  // Create the SQL insert query
  const q = `INSERT INTO course (course_id, course_title, course_details,course_level,course_price,course_instructor, course_total_hour, course_date_created ) VALUES (?,?,?,?,?,?,?,NOW())`;
  db.query(q, values, (err, data) => {
    if (err) {
      res.json(err);
      console.log(err);
    } else {
      //   res.json(data);
      console.log(data);
    }
  });
  const course_thumbnail = req.file; // File object

  // Generate a new file name
  const originalFileName = course_thumbnail.originalname;
  const fileExtension = originalFileName.split(".").pop();
  const newFileName = `${course_id}.${fileExtension}`;

  // Construct the new file path
  const newFilePath = `courses/thumbnails/${newFileName}`;

  // Rename the file
  fs.rename(course_thumbnail.path, newFilePath, (err) => {
    if (err) {
      // Handle the error
      console.error(err);
      return res.status(500).json({ message: "Error renaming the file" });
    }

    res.json({ message: "Course added successfully" });
  });
};
export const updateCourse = (req, res) => {};
export const deleteCourse = (req, res) => {};
