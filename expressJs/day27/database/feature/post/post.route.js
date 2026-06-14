import express from "express";
import {
  getAllPosts,
  createPost,
  updatePost,
  deletePost,
  getSpecificPost,
} from "./post.controller.js";

const router = express.Router();

//post routes
router.get("/", getAllPosts);
router.post("/", createPost);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);
router.get("/:id", getSpecificPost);

export default router;
