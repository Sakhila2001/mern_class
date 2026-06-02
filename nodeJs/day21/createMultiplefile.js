const fs = require("fs");
fs.writeFile("nodedoc.txt", "Hello, I am writing to readme.txt", (err) => {
  if (err) throw err;
  console.log("File created successfully");
});
fs.writeFile("nodedoc1.txt", "Hello, I am writing to first file", (err) => {
  if (err) throw err;
  console.log("File created successfully");
});
fs.writeFile("nodedoc2.txt", "Hello, I am writing to second file", (err) => {
  if (err) throw err;
  console.log("File created successfully");
});
fs.writeFile("nodedoc3.txt", "Hello, I am writing to third file", (err) => {
  if (err) throw err;
  console.log("File created successfully");
});
