const router = require('express').Router();
const {findById, previewAllNotes, createNewNote} = require('../../lib/notes');
const notes = require('../../db/db.json');


router.get('/notes', (req,res) => {
 
  return previewAllNotes (notes);
});

router.post('/notes', (req,res) => {
    // setting an id based on the index 
    // of the array of the notes just incase we want
    // to indetify note by note
    // let notes = JSON.parse(fs.readFileSync('./db/db.json'));
    // let noteArr = notes.notes
    req.body.id = notes.length.toString();
    // add note to json file and notes array in this function
        const newNote = createNewNote(req.body,notes);
        console.log(req.body);
       return res.json(newNote);
    
});

module.exports = router;
