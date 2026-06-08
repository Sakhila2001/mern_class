const express = require("express");
const dotenv = require("dotenv");
const logger = require("./middleware/logger");

dotenv.config();
const app = express();

//Middleware  we use app.use to use middleware
app.use(express.json()); //tell that the data is in json format
app.use(logger);

//features
app.use("/api/notes", require("./routes/note.route"));

//server port
const port = process.env.PORT || 3000;
//server listen
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
module.exports = app;
