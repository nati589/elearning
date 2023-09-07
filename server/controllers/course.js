import db from "../db";
import * as path from "path";
import * as url from "url";

export const getCourses = (req, res) => {
  const q = "select * from courses";

  db.query(q, (err, data) => {
    if (err) {
      res.json(err);
    } else {
      res.json(data);
    }
  });
};
