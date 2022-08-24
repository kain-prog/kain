require('dotenv').config();
const express = require('express');
const route = require('./src/routes/route');
const path = require('path');
const cors = require('cors');
const connectDB = require('./src/database/db');

const server = express();

//Connection MongoDB
connectDB();

server.use(cors());
server.use(express.json());
server.use(express.urlencoded());

// Template EJS
server.set('view engine', 'ejs');
server.set('views', path.join(__dirname, 'src/views'));

// Statics files
server.use(express.static('src/public'));

// Pages
server.use('/', route );


server.listen(process.env.PORT, () => {
    console.log('Servidor rodando... ', process.env.PORT);
});