const express = require('express');

const PORT = process.env.PORT || 3009;
const app = express ();
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

//parse incoming string or array datas
app.use(express.urlencoded({extended:true}));
//parse incoming JSON data
app.use(express.json());
// GET HTTP requist from the server and to look for 
// css and js file to help the html file when requisted
app.use(express.static('public'));

// Use apiRoutes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});
