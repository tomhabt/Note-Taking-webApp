// Essential dependencies
const fs = require('fs'); // use is part of NodeJs method that enable to access the files in a local machine.
const path = require ('path');
const router = require('express').Router();
const {previewAllNotes, createNewNote} = require('../../lib/notes');
const {allNotes} = require('../../db/db.json');

// GET all notes  from the server and display it 
router.get('/notes', (req,res) => {
  return res.json(previewAllNotes());
});

// POST new note insertion from client and save it in the server
router.post('/notes', (req,res) => {
    // setting an id based on the index of the array of the notes just incase we want to indetify note by note
    let notesObj = JSON.parse(fs.readFileSync(path.join(__dirname,'../../db/db.json')));
    req.body.id = notesObj.allNotes.length.toString();
    // add note to json file and notes array in this function
        const newNote = createNewNote(req.body,allNotes);
        console.log(req.body);
       return res.json(newNote);
});

// DELETE any note  for the  client 
router.delete('/notes/:id', (req,res) => {
    //creates variable from db.json file
    let notesObj = JSON.parse(fs.readFileSync(path.join(__dirname,'../../db/db.json')));
    console.log(notesObj);
    //removes/filters deleteFile from notes
    let allNotes = notesObj.allNotes.filter(note => note.id !== req.params.id);
    console.log(allNotes);
    // let allNotesObj = {allNotes}
   
    //write notes variable to db.json file
    fs.writeFileSync('./db/db.json', JSON.stringify({allNotes},null, 2));
    //return notes to client
    return res.json(allNotes);
});

module.exports = router;
