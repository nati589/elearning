import { db } from "../db.js";
import fs from "fs";
import { v4 as uuidv4 } from "uuid";

export const getPurchases = (req, res) => {
  const q = "SELECT * FROM purchase";
  db.query(q, (err, data) => {
    if (err) {
      res.json(err);
      console.log(err);
    } else {
      res.json(data);
    }
  });
};
export const getPurchasesThisYear = (req, res) => {
  const q = `
    SELECT *
    FROM purchase
    WHERE YEAR(purchase_date) = YEAR(CURRENT_DATE)
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
