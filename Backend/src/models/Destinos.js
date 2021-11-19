const { Schema, model } = require('mongoose');

const destinoSchema = new Schema({
    name: {type: String, required:true},
    description: {type: String, required:true},
    ubication: {type: String, required:true},
    price: {type: Number, required:true},
    date: {type: Date, default:Date.now()}
})

module.exports = model('Destino', destinoSchema);