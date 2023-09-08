import { db } from "../db.js";
import fs from "fs";
import { v4 as uuidv4 } from "uuid";

export const getBooks = (req, res) => {
  const q = "SELECT * FROM book";
  db.query(q, (err, data) => {
    if (err) {
      res.json(err);
      console.log(err);
    } else {
      res.json(data);
    }
  });
};
export const getBooksThisYear = (req, res) => {
  const q = `
    SELECT *
    FROM book
    WHERE YEAR(book_date_created) = YEAR(CURRENT_DATE)
  `;
  db.query(q, (err, data) => {
    if (err) {
      res.json(err);
      console.log(err);
    } else {
      res.json(data);
    }
  });
};
export const getBooksThisMonth = (req, res) => {
  const q = `
  SELECT
  DATE_FORMAT(book_date_created, '%Y-%m') AS month_value,
  COUNT(*) AS count
FROM
  book
WHERE
  book_date_created >= DATE_SUB(CURDATE(), INTERVAL 1 YEAR)
GROUP BY
  month_value
ORDER BY
  month_value `;
  db.query(q, (err, data) => {
    if (err) {
      res.json(err);
      console.log(err);
    } else {
      // Define an array of month names
      const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];

      // Create an array to store the result with counts for each month
      const resultArray = months.map((monthName) => {
        const matchingRow = data.find((row) => {
          // Input date in the format "YYYY-MM"
          const inputDate = row.month_value;

          // Create a JavaScript Date object from the input date
          const dateParts = inputDate.split("-");
          const year = parseInt(dateParts[0], 10);
          const month = parseInt(dateParts[1], 10) - 1; // Months are 0-indexed, so subtract 1

          const jsDate = new Date(year, month);

          // Get the short month name
          const monthNames = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ];
          const shortMonthName = monthNames[jsDate.getMonth()];

          return shortMonthName === monthName;
        });
        return {
          month: monthName,
          count: matchingRow ? matchingRow.count : 0, // Set count to 0 if no data for the month
        };
      });

      // Print or use the resultArray as needed
      const monthData = resultArray.map((data) => data.count);
      // console.log(resultArray.count);
      res.json(monthData);
    }
  });
};
export const getBooksThisWeek = (req, res) => {
  const q = `
      SELECT DAYNAME(book_date_created) AS day_name, COUNT(*) AS count
      FROM book
      WHERE book_date_created >= CURDATE() - INTERVAL 6 DAY
        AND book_date_created < CURDATE() + INTERVAL 1 DAY
      GROUP BY DAYNAME(book_date_created)
      ORDER BY DAYNAME(book_date_created) DESC;
    `;
  db.query(q, (err, data) => {
    if (err) {
      res.json(err);
      console.log(err);
    } else {
      const resultArray = [];

      // Initialize the array with days and counts
      const daysOfWeek = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ];
      console.log(data);
      daysOfWeek.forEach((day) => {
        const row = data.find((r) => r.day_name === day);
        resultArray.push({
          day_name: day,
          count: row ? row.count : 0,
        });
      });

      // Print the result array
      const dataOfWeek = resultArray.map((data) => data.count);
      console.log(resultArray);
      res.json(dataOfWeek);
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
