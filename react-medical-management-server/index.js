const express = require("express");
const mySecret = process.env["PORT"];
const app = express();
// const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World22222!");
});

app.get("/twitter", (req, res) => {
  res.send("<h1>Rushikesh Ganorkar Twiter</h1>");
});

app.listen(mySecret, () => {
  console.log(`Example app listening on port ${mySecret}`);
});
