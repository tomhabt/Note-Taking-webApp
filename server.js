const express = require('express');
const fs = require('fs'); // use is part of NodeJs method that enable to access the files in a local machine.
const path = require('path'); // use of path is anothe module of Node Js API and provided  a utilities with file and directory paths

const { notes } = require('./db/db');

const app = express ();

//parse incoming string or array datas
app.use(express.urlencoded({extended:true}));
//parse incoming JSON data
app.use(express.json());

const PORT = process.env.PORT || 3005;

// function to handle new note creation
function createNewNote(body,notesArray) {
    console.log(body);
    const note = body
    notes.push(note);
    fs.writeFileSync(
        path.join(__dirname,'./db/db.json'),JSON.stringify({notes:notesArray}, null, 2)
    );
return note;
};

// function to validate incoming notes from the client side
function validateNote(note) {
    if (!note.title || typeof note.title !=='string') {
        return false;
    }
    if (!note.text || typeof note.text !=='string') {
        return false;
    }
    return true;
}

app.get('/api/notes', (req,res) => {
    res.json(notes);
})

app.post('/api/notes', (req,res) => {
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

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});
