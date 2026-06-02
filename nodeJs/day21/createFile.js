/*
CREATE (C)
READ (R)
UPDATE (U)
DELETE (D)
*/

//create file
const fs = require("fs"); //Import from fs node module
//fs module is used to create, read, update and delete files
//fs module directly interacts with the file system

fs.writeFile("readme.txt", "Hello, Java is not JavaScript", (err) => {
  if (err) throw err;
  console.log("File created successfully");
});
