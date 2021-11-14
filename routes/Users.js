const express = require("express");
const usersRouter = express.Router();

const connection = require("../dbConfig");

usersRouter.get("/users", async (req, res) => {
  connection.query("SELECT * from Diplom.USERS", function (err, rows, fields) {
    if (err) throw err;
    console.log("The solution is: ", rows);
    res.json(rows);
  });
});

module.exports = usersRouter;
