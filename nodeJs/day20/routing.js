//how routing used to work on http
const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("This is home page.");
  } else if (req.url === "/about") {
    res.end("This is about page.");
  } else if (req.url === "/contact") {
    res.end("This is contact page.");
  } else {
    res.end("404 page not found");
  }
});
server.listen(8080, () => {
  console.log("Server is running on port 8080");
});
