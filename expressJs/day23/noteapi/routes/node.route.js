const express = require("express");
const { default: getAllNotes } = require("../controller/note.controller");
const noteRoute = express.Router();

//features
noteRoute.get("/", getAllNotes);
noteRoute.post("/");
noteRoute.put("/:id");
noteRoute.delete("/:id");
noteRoute.get("/:id");




module.exports = noteRoute;
