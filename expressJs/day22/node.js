//routing from node.js
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("welcome to home page");
  } else if (req.url === "/about") {
    res.end("welcome to about page");
  } else if (req.url === "/contact") {
    res.end("welcome to contact page");
  } else if (req.url === "/product") {
    res.end("welcome to product page");
  } else {
    res.end("Page not found");
  }
});

server.listen(3000, () => {
  console.log("server is running on port 3000");
});
