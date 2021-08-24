const fs = require('fs'); // use is part of NodeJs method that enable to access the files in a local machine.
const path = require('path'); // use of path is anothe module of Node Js API and provided  a utilities with file and directory paths


// function to preview and manage all notes from the Client
function previewAllNotes() {
    // Retrieves all notes for the GET purpose

    let notesObj =  JSON.parse(fs.readFileSync(path.join(__dirname,'../db/db.json')));
    return notesObj.allNotes;
};

// function to handle new note creation
function createNewNote(body) {
    console.log(body);
    // Creates new noted for the POST purpose
    const newNote = body
    let notesObj =  JSON.parse(fs.readFileSync(path.join(__dirname,'../db/db.json')));
    // sending the new note from client and push it into the parsed notes with property name of "allNotes"
    notesObj.allNotes.push(newNote);
    fs.writeFileSync(
        path.join(__dirname,'../db/db.json'),JSON.stringify(notesObj, null, 2));
    return newNote;
};

// // function to delete or edit a note 
// function deleteNote(req) {
//     let deleteNote = req.params.id;
//     let notesObj =  JSON.parse(fs.readFileSync(path.join(__dirname,'../db/db.json')));
//     let newNote = notesObj.filter(trash => trash.id !== deleteNote)

//     notesObj.allNotes.push(newNote);
//     fs.writeFileSync(
//         path.join(__dirname,'../db/db.json'),JSON.stringify(newNote, null, 2));
//     return newNote;
//     };

    // //creates variable from file to delete
    // let deleteNote = req.params.id;
    // //creates variable from db.json file
    // let notes = JSON.parse(fs.readFileSync('./data/db.json', 'utf8'));
    // //removes/filters deleteFile from notes
    // let newNotes = notes.filter(file => file.id !== deleteNote);
    // //write notes variable to db.json file
    // fs.writeFileSync('./data/db.json', JSON.stringify(newNotes));
    // //return notes to client
    // return res.json(newNotes);

module.exports = { 
    
    createNewNote,
    previewAllNotes,
};
