import { db } from "../db.js";
import fs from "fs";
import { v4 as uuidv4 } from "uuid";

export const getCourses = (req, res) => {
  const q = "SELECT * FROM course WHERE course_archived = '0'";
  db.query(q, (err, data) => {
    if (err) {
      return res.status(401).send({ message: "Connection error try again." });
    } else {
      res.status(200).json(data);
    }
  });
};

export const getSingleCourse = (req, res) => {
  const id = req.params.id;
  console.log(id);
  // const { courseID } = req.body;
  const q = `SELECT * FROM course WHERE course_id ='${id}'`;
  db.query(q, id, (err, data) => {
    if (err) {
      return res.status(401).send({ message: "Connection error try again." });
    } else {
      if (data.length === 0) {
        return res.status(404).send({ message: "Data not found!" });
      }

      res.status(200).json(data);
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
export const updateCourse = (req, res) => {
  const courseId = req.params.id;
  console.log(req.params.id)
  console.log(req.body)
  const q = `UPDATE course SET course_title = ?, course_details = ?, course_level = ?, course_price = ?, course_instructor = ?, course_total_hour = ? WHERE course_id = '${req.params.id}'`;
  db.query(q, Object.values(req.body), (err, data) => {
    if (err) {
      res.json(err);
      console.log(err);
    } else {
      //   res.json(data);
      console.log(data);
      // Check if a new file has been uploaded
      if (req.file) {
        const courseThumbnail = req.file; // File object

        // Generate a new file name
        const originalFileName = courseThumbnail.originalname;
        const fileExtension = originalFileName.split('.').pop();
        const newFileName = `${courseId}.${fileExtension}`;

        // Construct the new file path
        const newFilePath = `courses/thumbnails/${newFileName}`;

        // Move the file with overwrite option
        // Rename the file with overwrite option
        fs.rename(courseThumbnail.path, newFilePath, (renameErr) => {
          if (renameErr) {
            console.error(renameErr);
            return res.status(500).json({ message: 'Error renaming the file' });
          }

          res.json({ message: 'Course updated successfully' });
        });
      } else {
        res.json({ message: 'Course updated successfully' });
      }
    }
  });
};
export const deleteCourse = (req, res) => {
  const q = `UPDATE course SET course_archived = 1 WHERE course_id = '${req.body.id}'`;
  db.query(q, req.body.id, (err, data) => {
    if (err) {
      return res.status(401).send({ message: "Connection error try again." });
    } else {
      res.json(data);
    }
  });
};
