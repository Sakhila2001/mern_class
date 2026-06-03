const express = require("express");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT;
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to home page from server.js");
});

app.get("/about", (req, res) => {
  res.send("Welcome to about page from server.js");
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
