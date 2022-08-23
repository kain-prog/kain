require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const route = require('./route');
const path = require('path');
const cors = require('cors');

const server = express();

// MongoDB

mongoose.connect(process.env.MONGO_CONNECTION_URL, (error) => {
    if(error)
        console.log(error)
    else
        console.log('Banco conectado...')
})

server.use(cors());
server.use(express.json());


// Template EJS
server.set('view engine', 'ejs');
server.set('views', path.join(__dirname, 'views'));

// Statics files
server.use(express.static('src/public'));

// Pages
server.use('/', route );


server.listen(process.env.PORT, () => {
    console.log('Servidor rodando... ', process.env.PORT);
});