const fs = require("fs");
const path = require("path");

const NOTE_DIR = path.join(__dirname, "../../notes");

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
export default getAllNotes;
