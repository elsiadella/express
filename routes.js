const express = require("express");
const router = express.Router();
const db = require("./db");

router.get("/users", (req, res) => {
  db.query("SELECT * FROM users", (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

router.post("/users", (req, res) => {
  const { name, email } = req.body;
  db.query(
    "INSERT INTO users (name, email) VALUES (?, ?)",
    [name, email],
    (err, results) => {
      if (err) throw err;
      res.send(results);
    }
  );
});

module.exports = router;