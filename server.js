// require express
const express = require('express');
// create a port for our server
const PORT = process.env.PORT || 3001; 
// instantiate the server
const app = express();
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// parse incoming string or array data
app.use(express.urlencoded({extended: true}));
//parse incoming JSON data
app.use(express.json());
// use css/js/image files in the public folder; makes it static so no endpoints needed for each file
app.use(express.static('public'));

// use apiRoutes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});