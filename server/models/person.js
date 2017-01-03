var mongoose = require('mongoose');

var PersonSchema = new mongoose.Schema({
    name: {type: String},

}, {timestamps: true})

var Person = mongoose.model('Person', PersonSchema);

console.log('Established Person Schema');
