//Modules
const express = require('express');

//Set Enviroment
require('dotenv').config()

//set Express App and Port
const app = express();
const port = 4141;

//BodyParser
app.use(express.json());
app.use(express.urlencoded({ extended:false }));

//router
app.use('/movies', require('./Routers/movies.routers'));

app.get('/', (req, res) => {
    res.json({message: 'its alive!'})
});

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});