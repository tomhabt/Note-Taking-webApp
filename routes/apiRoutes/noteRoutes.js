const router = require('express').Router();
const {findById, createNewNote, validateNote} = require('../../lib/notes');
const {notes} = require('../../db/db');


router.get('/notes/:id', (req,res) => {
    const result = findById(req.params.id, notes);
    if (result) {
        res.json(result);
    } else {
        res.send(404);
    }
});

router.post('/notes', (req,res) => {
    // setting an id based on the index 
    // of the array of the notes just incase we want
    // to indetify note by note
    req.body.id = notes.length.toString();
    // add note to json file and notes array in this function
    if (!validateNote(req.body)){
        res.status(400).send('The note is not properly formatted. Please try again!');
    } else { 
        const note = createNewNote(req.body,notes);
        console.log(req.body);
        res.json(note);
    }
});

module.exports = router;
