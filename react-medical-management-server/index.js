const express = require("express");
require("dotenv").config();
const app = express();
// const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World22222!");
});

app.get("/twitter", (req, res) => {
  res.send("<h1>Rushikesh Ganorkar Twiter</h1>");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
