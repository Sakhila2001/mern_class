import "dotenv/config";
import express from "express";

import { connectionDB } from "./config/index.js";
import authRouter from "./features/auth/auth.routes.js";

const app = express();

// middleware
app.use(express.json());

await connectionDB();
app.use("/api/auth", authRouter);

// health check route
app.get("/", (req, res) => {
  res.send("Express server is running on port 5900");
});
app.listen(5900, () => {
  console.log("Server is running on port 5900");
});
