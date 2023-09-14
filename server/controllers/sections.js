import { db } from "../db.js";
import fs from "fs";
import { v4 as uuidv4 } from "uuid";

export const getSections = (req, res) => {
  const q = "SELECT * FROM section";
  db.query(q, (err, data) => {
    if (err) {
      return res.status(401).send({ message: "Connection error try again." });
    } else {
      res.status(200).json(data);
    }
  });
};

export const getSingleSection = (req, res) => {
  const id = req.params.id;
  console.log(id);
  // const { courseID } = req.body;
  const q = `SELECT * FROM section WHERE section_id ='${id}'`;
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

export const getCourseSections = (req, res) => {
  const q = `SELECT * FROM section WHERE course_id = '${req.params.id}'`;
  db.query(q, (err, data) => {
    if (err) {
      return res.status(401).send({ message: "Connection error try again." });
    } else {
      res.status(200).json(data);
    }
  });
};

export const addSection = (req, res) => {
  const section_id = uuidv4();
  const values = Object.values(req.body);
  values.unshift(section_id);
  if (values[3] === "quiz") {
    values.pop();
  }
  values.push(req.params.id);
  console.log(values);
  // Create the SQL insert query
  const q = `INSERT INTO section (section_id, section_title, section_description, section_type, section_content, section_value, course_id) VALUES (?, ?, ?, ?, ?, ?, ?)`;
  db.query(q, values, (err, data) => {
    if (err) {
      res.json(err);
      console.log(err);
    } else {
      //   res.json(data);
      const query = `UPDATE course SET course_sections = course_sections + 1 WHERE course_id = '${req.params.id}';`;
      db.query(query);
      console.log(data);
      // Check if a new file has been uploaded
      if (req.file) {
        const sectionFile = req.file; // File object

        // Generate a new file name
        const originalFileName = sectionFile.originalname;
        const fileExtension = originalFileName.split(".").pop();
        const newFileName = `${section_id}.${fileExtension}`;

        // Construct the new file path
        const newFilePath = `sections/files/${newFileName}`;

        // Move the file with overwrite option
        // Rename the file with overwrite option
        fs.rename(sectionFile.path, newFilePath, (renameErr) => {
          if (renameErr) {
            console.error(renameErr);
            return res.status(500).json({ message: "Error renaming the file" });
          }

          res.json({ message: "Section created successfully" });
        });
      } else {
        res.json({ message: "Section created successfully" });
      }
    }
  });
  //   const course_thumbnail = req.file; // File object
  //   // Generate a new file name
  //   const originalFileName = course_thumbnail.originalname;
  //   const fileExtension = originalFileName.split(".").pop();
  //   const newFileName = `${course_id}.${fileExtension}`;
  //   // Construct the new file path
  //   const newFilePath = `courses/thumbnails/${newFileName}`;
  //   // Rename the file
  //   fs.rename(course_thumbnail.path, newFilePath, (err) => {
  //     if (err) {
  //       // Handle the error
  //       console.error(err);
  //       return res.status(500).json({ message: "Error renaming the file" });
  //     }
  //     res.json({ message: "Course added successfully" });
  //   });
};
export const updateSection = (req, res) => {
  // console.log(req.params.id);
  // console.log(req.body);
  const section_id = req.params.id;
  const values = Object.values(req.body);
  console.log(values);
  if (values[2] === "quiz") {
    values.pop();
  }
  values.push(req.params.id);
  console.log(values);
  // Create the SQL insert query
  const q = `UPDATE section SET section_title = ?, section_description = ?, section_type = ?, section_content = ?,section_value = ? WHERE section_id = '${req.params.id}';`;
  db.query(q, values, (err, data) => {
    if (err) {
      res.json(err);
      console.log(err);
    } else {
      // Check if a new file has been uploaded
      if (req.file) {
        const sectionFile = req.file; // File object

        // Generate a new file name
        const originalFileName = sectionFile.originalname;
        const fileExtension = originalFileName.split(".").pop();
        const newFileName = `${section_id}.${fileExtension}`;

        // Construct the new file path
        const newFilePath = `sections/files/${newFileName}`;

        // Move the file with overwrite option
        // Rename the file with overwrite option
        fs.rename(sectionFile.path, newFilePath, (renameErr) => {
          if (renameErr) {
            console.error(renameErr);
            return res.status(500).json({ message: "Error renaming the file" });
          }

          res.json({ message: "Section changed successfully" });
        });
      } else {
        res.json({ message: "Section changed successfully" });
      }
    }
  });
};
export const deleteSection = (req, res) => {
  const sectionId = req.body.id;
  const courseId = req.body.course_id;

  db.beginTransaction((err) => {
    if (err) {
      return res.status(500).send({ message: 'Transaction error. Please try again.' });
    }

    // Delete the section
    const deleteQuery = `DELETE FROM section WHERE section_id = '${sectionId}'`;
    db.query(deleteQuery, (err, deleteResult) => {
      if (err) {
        db.rollback(() => {
          res.status(500).send({ message: 'Error deleting section. Please try again.' });
        });
      } else {
        // Update the course_sections value
        const updateQuery = `UPDATE course SET course_sections = course_sections - 1 WHERE course_id = '${courseId}'`;
        db.query(updateQuery, (err, updateResult) => {
          if (err) {
            db.rollback(() => {
              res.status(500).send({ message: 'Error updating course_sections. Please try again.' });
            });
          } else {
            db.commit((err) => {
              if (err) {
                db.rollback(() => {
                  res.status(500).send({ message: 'Transaction commit error. Please try again.' });
                });
              } else {
                res.json({ message: 'Section deleted successfully.' });
              }
            });
          }
        });
      }
    });
  });
};
