const router = require('express').Router();
const {previewAllNotes, createNewNote} = require('../../lib/notes');
// const {allNotes} = require('../../db/db.json');


router.get('/notes', (req,res) => {
 
  return res.json(previewAllNotes());
});




router.post('/notes', (req,res) => {
    // setting an id based on the index 
    // of the array of the notes just incase we want
    // to indetify note by note
    // let notes = JSON.parse(fs.readFileSync('./db/db.json'));
    // let noteArr = notes.notes
    // req.body.id = allNotes.length.toString();
    // add note to json file and notes array in this function
        const newNote = createNewNote(req.body);
        console.log(req.body);
       return res.json(newNote);
    
});

module.exports = router;
