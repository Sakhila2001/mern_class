const fs = require("fs");
const path = require("path");

const NOTE_DIR = path.join(__dirname, "../notes");

const getAllNotes = (req, res) => {
  const { search } = req.query;
  fs.readdir(NOTE_DIR, (err, files) => {
    if (err) return res.status(500).json({ error: "Failed to read notes" });
    let notes = files.filter((file) => file.endsWith(".txt"));
    if (search) {
      notes = notes.filter((note) => note.includes(search));
    }
    res.json({
      success: true,
      data: notes,
      total: notes.length,
    });
  });
};

//POST-create a new note
const createNote = (req, res) => {
  //step 1: get the data
  const { fileName, content } = req.body;
  //step 2: Validate the incoming data
  if (!fileName || !fileName.trim()) {
    return res.status(400).json({
      message: "Please provide a file name",
    });
  }
  if (!content || !content.trim()) {
    return res.status(400).json({
      message: "Please provide content",
    });
  }
  //step 3: Validate the file extension should be .txt not (.js, .css, .html)
  if (!fileName.endsWith(".txt")) {
    return res.status(400).json({
      message: "File name should be .txt",
    });
  }

  //step 4: Define the file path
  const filePath = path.join(NOTE_DIR, fileName);

  //step 5: File should be created by serve
  fs.writeFile(filePath, content.trim(), "utf-8", (err) => {
    if (err) {
      return res.status(500).json({
        message: "Failed to create note",
      });
    }
    res.status(201).json({
      success: true,
      message: `Note created successfully ${fileName}`,
      created_at: new Date().toISOString(),
    });
  });
};

const deleteSpecificeNote = (req, res) => {
  const fileName = path.basename(req.params.fileName);
  const filePath = path.join(NOTE_DIR, fileName);
  fs.unlink(filePath, (err) => {
    if (err) {
      return res.status(500).json({
        message: "Failed to delete note",
      });
    }
    res.status(200).json({
      success: true,
      message: `Note deleted successfully`,
      data: fileName,
      deleted_at: new Date().toISOString(),
    });
  });
};

const getSpecificeNote = (req, res) => {
  const fileName = path.basename(req.params.fileName);
  const filePath = path.join(NOTE_DIR, fileName);
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      return res.status(500).json({
        message: "No file found",
      });
    }
    res.status(200).json({
      success: true,
      fileName: fileName,
      content: data,
    });
  });
};

const updateSpecificeNote = (req, res) => {
  const fileName = path.basename(req.params.fileName);
  const filePath = path.join(NOTE_DIR, fileName);
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      return res.status(500).json({
        message: "No file found",
      });
    }
    const { content } = req.body;
    fs.writeFile(filePath, content, "utf-8", (err) => {
      if (err) {
        return res.status(500).json({
          message: "Failed to update note",
        });
      }
      res.status(200).json({
        success: true,
        message: `Note updated successfully`,
        data: content,
        updated_at: new Date().toISOString(),
      });
    });
  });
};
module.exports = {
  getAllNotes,
  createNote,
  deleteSpecificeNote,
  getSpecificeNote,
  updateSpecificeNote,
};
