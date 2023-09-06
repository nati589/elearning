import { db } from "../db.js";

export const getContent = (req, res) => {
  const q = "select * from web_content";

  db.query(q, (err, data) => {
    if (err) {
      res.json(err);
      console.log(err);
    } else {
      res.json(data);
    }
  });
};

export const changeContent = (req, res) => {
//   console.log(req.body);

    const q = "UPDATE web_content SET ? WHERE web_content_id = ?";
  
    db.query(q,[req.body, req.body.web_content_id], (err, data) => {
      if (err) {
        res.json(err);
      } else {
        res.json('all good');
      }
    });
  };
