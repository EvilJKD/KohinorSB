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
    },
    precio: {
        type: Number,
        required:true
    },

});

const Modulo = new mongoose.model('modulo',moduleSchema); //copliar el esquema en un modelo

const modulo = new Modulo({
    nombre: 'Activos Fijos',
    descripcion: 'Control y asignación de cada uno de los Activos a los funcionarios o empleados de la Empresa. cálculo automático de depreciación del bien en función del tiempo y valor del Bien, reasignación de activos fijos, manejo de cambio o revalorización del activo fijo, manejo de historial de inventario físico.',
    img: 'Icon/Menu125/9.png',
    precio: 5.0
});

// modulo.save();
module.exports = Modulo;