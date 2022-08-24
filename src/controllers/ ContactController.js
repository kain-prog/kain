const Contact = require('../models/Contact');

let message = '';
let type = '';

const getAll = async (req, res) => {
    try {
        return res.render('pages/index', {
            message,
            type
        });
    } catch (err) {
        res.status(500).send({ error: err.message });
    }  
};

const createContact = async (req, res) => {
    const contact = req.body;
    
    if(contact.nome.length < 3){
        message = 'Por favor, use um nome válido.';
        type = 'danger';
            return res.redirect('/#contact');
    }
    else if(contact.email.length < 8){
        message = 'Por favor, preencha um e-mail válido.';
        type = 'danger';
            return res.redirect('/#contact');
    }
    else if(contact.assunto.length < 3){
        message = 'Por favor, escreva um assunto válido.';
        type = 'danger';
            return res.redirect('/#contact');
    }
    else if(contact.mensagem.length < 4){
        message = 'Por favor, digite uma mensagem válida.';
        type = 'danger';
            return res.redirect('/#contact');
    }

    try {
        await Contact.create(contact);
            message = 'A sua mensagem foi enviada com sucesso!'
            type = 'success';
                return res.redirect('/#contact');
    } catch (err) {
        res.status(500).send({error: err.message});
    }

};

module.exports = {
    createContact,
    getAll
};