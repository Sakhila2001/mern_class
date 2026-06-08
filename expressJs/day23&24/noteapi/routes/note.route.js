const express = require("express");
const {
  getAllNotes,
  createNote,
  deleteSpecificeNote,
  getSpecificeNote,
  updateSpecificeNote,
} = require("../controller/note.controller");
const noteRoute = express.Router();

//features
noteRoute.get("/", getAllNotes);
noteRoute.post("/", createNote);
noteRoute.delete("/:fileName", deleteSpecificeNote);
noteRoute.put("/:fileName", updateSpecificeNote);
noteRoute.get("/:fileName", getSpecificeNote);

module.exports = noteRoute;
