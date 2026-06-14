import "dotenv/config";
import express from "express";

import { connectionDB } from "./models/index.js";

import userRoute from "./feature/user/user.route.js";
import postRoute from "./feature/post/post.route.js";

const app = express();

// middleware
app.use(express.json());

await connectionDB();
// routes
app.use("/api/user", userRoute);
app.use("/api/post", postRoute);

// health check route
app.get("/", (req, res) => {
  res.send("Express server is running on port 8000");
});
app.listen(8000, () => {
  console.log("Server is running on port 8000");
});