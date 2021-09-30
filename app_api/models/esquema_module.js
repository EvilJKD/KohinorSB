const mongoose = require('mongoose');
//Schema Modulo
const moduleSchema =  new mongoose.Schema({
    nombre: {
        type: String,
        required:true
    },
    descripcion: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required:true
    },
    precio: {
        type: Number,
        required:true
    },

});

const Modulo = new mongoose.model('modulo',moduleSchema); //copliar el esquema en un modelo

const modulo = new Modulo({
    nombre: 'Modulo Cash PREMIUM',
    descripcion: 'Manejo de datos + sistema integrado',
    img: 'dummy.jpg',
    precio:50
});

//modulo.save();
module.exports = Modulo;