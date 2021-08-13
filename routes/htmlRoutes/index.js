const path = require('path');
const router = require('express').Router();

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});

// adding a route to the server file and
//this simply does only one job and it responds an HTML file
//to be viewed in the browser
router.get('/notes', (req,res) => {
  res.sendFile(path.join(__dirname,'../../public/notes.html'))
});
// creating a wildcard Routes just incase the note app user requist 
// unavaialable route
router.get('*', (req,res) => {
  res.sendFile(path.join(__dirname,'../../public/index.html'))
});

module.exports = router;