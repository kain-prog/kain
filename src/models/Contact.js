const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    nome: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    assunto: {
        type: String,
        require: true,
    },
    mensagem: {
        type: String,
        require: true,
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Contact', contactSchema);