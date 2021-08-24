const fs = require('fs'); // use is part of NodeJs method that enable to access the files in a local machine.
const path = require('path'); // use of path is anothe module of Node Js API and provided  a utilities with file and directory paths
// const {allNotes} = require('../db/db.json');

// function to preview and manage all notes from the Client
function previewAllNotes() {
    // Retrieves all notes for the GET purpose

    let result =  JSON.parse(fs.readFileSync(path.join(__dirname,'../db/db.json')));
return result.allNotes;
};

// function to handle new note creation
function createNewNote(body) {
    console.log(body);
    // Creates new noted for the POST purpose
    const newNote = body
    let notes =  JSON.parse(fs.readFileSync(path.join(__dirname,'../db/db.json')));

    notes.allNotes.push(newNote);
    fs.writeFileSync(
        path.join(__dirname,'../db/db.json'),JSON.stringify({notes}, null, 2));
return newNote;

};


// const animal = body;
// animalsArray.push(animal);
// fs.writeFileSync(
//   path.join(__dirname, '../data/animals.json'),
//   JSON.stringify({ animalsArray }, null, 2)
// );
// return animal;


module.exports = { 
    createNewNote,
    previewAllNotes,
};
