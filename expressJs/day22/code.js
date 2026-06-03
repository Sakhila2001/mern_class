const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to home page");
});

app.get("/about", (req, res) => {
  res.send("Welcome to about page");
});

app.listen(4000, () => {
  console.log("server is running on port 4000");
});