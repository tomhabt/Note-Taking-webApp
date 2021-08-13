const fs = require('fs'); // use is part of NodeJs method that enable to access the files in a local machine.
const path = require('path'); // use of path is anothe module of Node Js API and provided  a utilities with file and directory paths

// function to find notes in each array index for deleting or updating purpose
function findById (id,notesArray) {
    const result = notesArray.filter(note => note.td === id)[0];
    return result;
}

// function to handle new note creation
function createNewNote(body,notesArray) {
    console.log(body);
    const note = body
    notes.push(note);
    fs.writeFileSync(
        path.join(__dirname,'../db/db.json'),JSON.stringify({notes:notesArray}, null, 2)
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
};

module.exports = {
    findById,
    createNewNote,
    validateNote
};
