import "dotenv/config";
import express from "express";
import userPostRoute from "./routes/user.route.js";
import postRoute from "./routes/post.route.js";

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use("/api/user", userPostRoute);
app.use("/api/post", postRoute);

app.get("/", (req, res) => {
  res.send("Express server is running on port 8000");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
