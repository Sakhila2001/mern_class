//update file
const fs = require("fs");

fs.appendFileSync("readme.txt", "Hello, I am updating the file", (err) => {
  if (err) throw err;
  console.log("File updated successfully");
});
