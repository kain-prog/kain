const mongoose = require('mongoose');

const connectDB = () => {
    mongoose.connect(
        'mongodb+srv://root:root@portfolio.pdpamyu.mongodb.net/?retryWrites=true&w=majority',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    )
    .then(() => {
        console.log('MongoDB Conectado...')})
    .catch((err) => {
        console.log(err)});
};

module.exports = connectDB;