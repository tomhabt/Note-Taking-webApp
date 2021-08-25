const fs = require('fs'); // use is part of NodeJs method that enable to access the files in a local machine.
const path = require('path'); // use of path is anothe module of Node Js API and provided  a utilities with file and directory paths

// function to preview and manage all notes from the Client
function previewAllNotes() {
    // Retrieves all notes for the GET purpose
    let notesObj =  JSON.parse(fs.readFileSync(path.join(__dirname,'../db/db.json')));
    return notesObj.allNotes;
};

// function to handle new note creation
function createNewNote(body,notesArray) {
    // Creates new noted for the POST purpose
    const newNote = body
    let notesObj =  JSON.parse(fs.readFileSync(path.join(__dirname,'../db/db.json')));
    // sending the new note from client and push it into the parsed notes with property name of "allNotes"
    notesObj.allNotes.push(newNote);
    fs.writeFileSync(
        path.join(__dirname,'../db/db.json'),JSON.stringify(notesObj, null, 2));
    return newNote;
};

module.exports = { 
    createNewNote,
    previewAllNotes,
};
