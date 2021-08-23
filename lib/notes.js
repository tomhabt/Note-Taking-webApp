const fs = require('fs'); // use is part of NodeJs method that enable to access the files in a local machine.
// const { path } = require('path');
const path = require('path'); // use of path is anothe module of Node Js API and provided  a utilities with file and directory paths
const notes = require('../db/db.json');

// function to find notes in each array index for deleting or updating purpose
function findById (id,notesArray) {
    const result = notesArray.filter(note => note.id === id)[0];
    return result;
}

// function to preview and manage all notes from the Client
function previewAllNotes(body,notesArray) {
    // Retrieves all notes for the GET purpose
   let result =  JSON.parse(fs.readFileSync(__dirname,'./db/db.json'));
return result;
};


// function to handle new note creation
function createNewNote(body,notesArray) {
    console.log(body);
    // Creates new noted for the POST purpose
    const newNote = body
    notes.push(newNote);
    fs.writeFileSync(
        path.join(__dirname,'./db/db.json'),JSON.stringify(notes)
    );
return newNote;
};


module.exports = {
    findById,
    createNewNote,
    previewAllNotes,
    
};
