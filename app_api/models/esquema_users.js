const mongoose = require('mongoose');

//Schema Usuarios
const usuariosSchema =  new mongoose.Schema({
    nombre: {
        type: String,
        required:true
    },
    apellido: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required:true
    },
    contraseña: {
        type: String,
        required:true
    },

});

const Usuario = new mongoose.model('user',usuariosSchema); //copliar el esquema en un modelo

const user = new Usuario({
    nombre: 'Ash',
    apellido: 'Ketchum',
    email: 'poketrainer01@hotmail.com',
    contraseña: 'pikachu4life'
});
//user.save();
module.exports = Usuario;