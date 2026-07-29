const Notes = require('../models/Notes');       
const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');   
const mongoose = require('mongoose');
const { body, validationResult } = require('express-validator');    
const { Schema } = mongoose;


// Get all notes of the logged-in user: GET "/api/notes/fetchallnotes". Login required
router.get('/fetchallnotes', fetchuser, async (req, res) => {
  const notes = await Notes.find({ user: req.user.id });
  res.json(notes);
} )


// add notes of the logged-in user: POST "/api/notes/addnote". Login required   
router.post('/addnote', fetchuser, [
  body('title', 'Title is required').not().isEmpty(),
  body('description', 'Description is required').not().isEmpty()
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }try {
  const { title, description, tag } = req.body;
  const notes = new Notes({
    title,
    description,
    tag,
    user: req.user.id
  });
  const savedNote = await notes.save();
  res.json(notes);
} catch (error) {
  console.error(error);
  res.status(500).json({ message: 'Server Error' });
}
});


// ROUTE 3: Update an existing Note using: PUT "/api/notes/updatenote/:id". Login required
router.put('/updatenote/:id', fetchuser, async (req, res) => {
    const { title, description, tag } = req.body;
    try {
        const newNote = {};
        if (title) { newNote.title = title };
        if (description) { newNote.description = description };
        if (tag) { newNote.tag = tag };

        // Find the note to be updated
        let note = await Notes.findById(req.params.id);
        if (!note) { return res.status(404).send("Not Found") };

        // Allow update only if the logged-in user is the note's owner
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }

        note = await Notes.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true });
        res.json({ note });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});

module.exports = router;

module.exports = router