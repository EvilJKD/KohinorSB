//Schema Factura
const mongoose = require('mongoose');
const Modulo = mongoose.model('modulo');
const Usuario = mongoose.model('user');

const facturaSchema =  new mongoose.Schema({
    telefono: {
        type: String,
        required:true
    },
    direccion: {
        type: String,
        required: true
    },
    codPostal: {
        type: String,
        required:true
    },
    ciudad: {
        type: Number,
        required:true
    },
    provincia: {
        type: Number,
        required:true
    },
    pais: {
        type: Number,
        required:true
    },
    listaModulos: {
        type: [{type: mongoose.Schema.ObjectId, ref: "Modulo"}],
        required:true
    },

    usuario:{
        type: {type: mongoose.Schema.ObjectId, ref: "Usuario"},
        required:true
    }

});

const Factura = new mongoose.model('factura',facturaSchema); //copliar el esquema en un modelo

const factura = new Factura({
    nombre: 'Puntos de Venta',
    descripcion: 'Manejo de la información generada en el sitio físico de venta directa a los Clientes. Facilita el cobro inmediato en efectivo, cheque, tarjeta de crédito.',
    img: '',
    precio: 5
});