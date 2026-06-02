//delete file
const fs = require("fs");

fs.unlink("readme.txt", (err) => {
  if (err) throw err;
  console.log("File deleted successfully");
});