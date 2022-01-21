require("dotenv").config();
const express = require("express");
const router = express.Router();
const db1 = require("../config/db1");
const bcrypt = require("bcrypt");
const saltRounds = 10;
var jwt = require("jsonwebtoken");
const secret = process.env.SECRET_KEY;
const auth = require("../middleware/auth");
// Select Data
router.get("/", auth, (req, res) => {
  res.json({ status: "ok" });
});
router.get("/users", auth, (req, res) => {
  db1.query("select * from users", (err, rows) => {
    res.json(rows);
  });
});
router.post("/login", (req, res) => {
  db1.query(
    "SELECT * FROM users WHERE username=?",
    [req.body.username],
    (err, user, fields) => {
      if (err) return res.json(err);
      if (user.length == 0)
        return res.json({ status: "error", message: "username not found" });
      bcrypt.compare(
        req.body.password,
        user[0].password,
        function (err, isLogin) {
          if (isLogin) {
            var token = jwt.sign({ username: user[0].username }, secret);
            res.json({
              status: 200,
              message: "success",
              userData: user[0],
              token,
            });
          } else {
            res.json({ status: "error", message: "password not found" });
          }
        }
      );
    }
  );
});
router.get("/logout", auth, (req, res) => {
  const authHeader = req.headers["authorization"];
  var token = jwt.sign(authHeader, "", { expiresIn: 1 }, (logout, err) => {
    if (logout) {
      res.send({ msg: "You have been Logged Out" ,token});
    } else {
      res.send({ msg: "Error" });
    }
  });
});
router.post("/register", (req, res) => {
  bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
    db1.query(
      "INSERT INTO `MsAranhos`.`users` (`username`, `password`, `firstname`, `lastname`, `phone`, `email`, `role`) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [
        req.body.username,
        hash,
        req.body.firstname,
        req.body.lastname,
        req.body.phone,
        req.body.email,
        req.body.role,
      ],
      (err, result, fields) => {
        if (err) return res.json(err);
        res.json({ status: 200, message: "success" });
      }
    );
  });
});

module.exports = router;
