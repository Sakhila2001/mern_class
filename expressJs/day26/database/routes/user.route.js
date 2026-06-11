import express from "express";
import {
  createUser,
  deleteUser,
  getAllUsers,
  updateUser,
  getSpecificUser,
} from "../controller/user.controller.js";

const router = express.Router();

//user routes
router.get("/", getAllUsers);
router.post("/", createUser);
router.put("/:id", updateUser);
router.get("/:id", getSpecificUser);
router.delete("/:id", deleteUser);

export default router;
