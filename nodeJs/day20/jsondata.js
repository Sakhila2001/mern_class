//Creating server and sending json data
const http = require("http"); //step1: importing http module
const server = http.Server((req, res) => {
  //step2: creating a server which will listen to all requests
  res.end(
    JSON.stringify({
      name: "John Doe",
      age: 30,
      city: "New York",
    }),
  ); //step3: sending response
});
server.listen(8080, () => {
  //step4: starting the server
  console.log("Server is running on port 8080");
});
