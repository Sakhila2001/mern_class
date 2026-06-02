//read file
const fs = require("fs");
//utf-8 is the encoding type used to read the file content as a string because computers use binary to represent text
fs.readFile("readme.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
