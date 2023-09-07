import db from "../db";
import * as path from "path";
import * as url from "url";

export const getCourses = (req, res) => {
  const q = "select * from courses";

  db.query(q, (err, result) => {
    if (err) {
      return res
        .status(401)
        .send({ message: "Connection error try again.", data: result });
    } else {
      res.json(data);
    }
  });
};
