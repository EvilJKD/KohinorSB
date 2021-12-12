//Schema Factura
const mongoose = require('mongoose');
const Modulo = mongoose.model('modulo');
const Usuario = mongoose.model('user');

const facturaSchema =  new mongoose.Schema({

    nombre: {
        type: String,
        required:true
    },
    apellido: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required:true
    },
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
        type: String,
        required:true
    },
    provincia: {
        type: String,
        required:true
    },
    pais: {
        type: String,
        required:true
    },
    listaModulos: {
        type: [{type: mongoose.Schema.ObjectId, ref: 'modulo'}],
        required:true
    },
    numUsuarios: {
        type: Number,
        required: true
    },
    usuario:{
        type: mongoose.Schema.ObjectId, ref: 'user',
    }

});

const Factura = new mongoose.model('factura',facturaSchema); //copliar el esquema en un modelo

/* const factura = new Factura({
    nombre: "Rai",
    apellido: "Apellido",
    email: "raidia@gmail.com",
    telefono: "0912345678",
    direccion: "5th Ave",
    codPostal: "18932",
    ciudad: "New York",
    provincia: "NY",
    pais: "Estados Unidos",
    listaModulos: ["61562e9b53abf3120cd7fbac"],
    numUsuarios: 3,
    usuario: "61562d72dcf954049525116e"
});

factura.save() */
module.exports = Factura;