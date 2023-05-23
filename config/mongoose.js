// configuration for creating database connection
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://py383872:oGdfjZ5ELQX3UfqD@cluster0.xfmkgcu.mongodb.net/?retryWrites=true&w=majority');

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));


db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});

module.exports = db;