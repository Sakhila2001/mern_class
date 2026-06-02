const fs = require("fs");
console.log("Program started");
fs.readFile("nodedoc.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log("Data read of nodedoc.txt");
});
fs.readFile("nodedoc1.txt", "utf-8", (err, data1) => {
  if (err) throw err;
  console.log("Data read of nodedoc1.txt");
});
fs.readFile("nodedoc2.txt", "utf-8", (err, data2) => {
  if (err) throw err;
  console.log("Data read of nodedoc2.txt");
});
fs.readFile("nodedoc3.txt", "utf-8", (err, data3) => {
  if (err) throw err;
  console.log("Data read of nodedoc3.txt");
});
console.log("Program ended");
