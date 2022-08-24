const express = require('express');
const ContactController = require('../controllers/ ContactController');

const route = express.Router();

route.get('/', ContactController.getAll);
route.post('/', ContactController.createContact);

module.exports = route;