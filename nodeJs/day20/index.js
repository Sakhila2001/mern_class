//Creating first server
const http = require("http"); //step1: importing http module
const server = http.Server((req, res) => {
  //step2: creating a server which will listen to all requests
  //res.end("This is a simple web server");
  res.end(`<h1>Hello World</h1><p>This is a simple web server</p>`); //step3: sending response
});
server.listen(8000, () => {
  //step4: starting the server
  console.log("Server is running on port 8000");
});
