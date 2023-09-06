import { db } from "../db.js";
import multer from "multer";
import * as path from "path";

export const getUsers = (req, res) => {
  const q = "select * from team";

  db.query(q, (err, data) => {
    if (err) {
      res.json(err);
    } else {
      res.json(data);
    }
  });
};

export const addUser = (req, res) => {
  const q1 = "SELECT * FROM users WHERE user_email=? ";

  const [user_full_name, user_email, user_password] = req.body;

  db.query(q1, [user_email], (err, data) => {
    if (err) {
      return res.status(401).send({ message: "Connection error try again." });
    } else {
      if (data.length > 0) {
        return res.status(409).send({
          message:
            "An account already exist with this email. Please use a new email or login.",
        });
      } else {
        const currentDate = new Date();

        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, "0");
        const day = String(currentDate.getDate()).padStart(2, "0");
        const hours = String(currentDate.getHours()).padStart(2, "0");
        const minutes = String(currentDate.getMinutes()).padStart(2, "0");
        const seconds = String(currentDate.getSeconds()).padStart(2, "0");

        const currentDateTimeString = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

        const q =
          "INSERT INTO user (user_full_name,user_email,user_password,user_joined) VALUES (?,?,?,?)";

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(user_password, salt);

        db.query(
          q,
          [user_full_name, user_email, hash, currentDateTimeString],
          (err, data) => {
            if (err) {
              console.log(err);
              res.status(500).json({
                message: "Oops! Server connection error. Please try again.",
              });
            } else {
              res.status(200).json({
                message:
                  "Password reset successful. Login with your new credentials",
              });
            }
          }
        );
      }
    }
  });
};

export const updateUser = (req, res) => {
  try {
    let upload = multer({ storage: storage }).single("User_image");

    upload(req, res, function (err) {
      if (err instanceof multer.MulterError) {
        return res.send(err);
      } else if (err) {
        return res.send(err);
      }

      const uploadedFile = req.file
        ? { fileName: req.file.filename }
        : { fileName: null };

      console.log("fname", uploadedFile.fileName);

      if (req.body.old_image !== null) {
        const filename = req.body.old_image;
        const directoryPath = "../../client/src/images/profiles/";

        const filePath = path.join(__dirname, directoryPath, filename);

        unlink(filePath)
          .then(() => {
            console.log("File deleted successfully");
          })
          .catch((err) => {
            console.error(err);
          });
      }

      const q =
        "UPDATE team SET User_name=?, User_position=? ,User_image=? WHERE User_id=?";

      db.query(
        q,
        [
          req.body.User_name,
          req.body.User_position,
          uploadedFile.fileName,
          req.body.User_id,
        ],
        (err, data) => {
          if (err) {
            console.log(err);
            res.status(500).json({
              error: "Failed to update value in database. Please try again.",
            });
          } else {
            res.json(data);
          }
        }
      );
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteUser = (req, res) => {
  const q = " DELETE FROM team WHERE User_id=?";
  db.query(q, [req.body.User_id], (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).json({
        error:
          "Failed to delete User information in database. Please try again.",
      });
    } else {
      if (req.body.old_image !== null) {
        const filename = req.body.old_image;
        const directoryPath = "../../client/src/images/profiles/";
        const filePath = path.join(__dirname, directoryPath, filename);

        unlink(filePath)
          .then(() => {
            console.log("File deleted successfully");
          })
          .catch((err) => {
            console.error(err);
          });
      }

      res.json(data);
    }
  });
};