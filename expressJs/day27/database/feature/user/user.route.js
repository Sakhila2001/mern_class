import express from "express";
import {
  createUser,
  deleteUser,
  getAllUsers,
  updateUser,
  getSpecificUser,
  updatePassword,
} from "./user.controller.js";

const router = express.Router();

//user routes
router.get("/", getAllUsers);
router.post("/", createUser);
router.put("/:id", updateUser);
router.get("/:id", getSpecificUser);
router.delete("/:id", deleteUser);
router.patch("/:id", updatePassword);

export default router;
