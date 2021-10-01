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

    usuario:{
        type: mongoose.Schema.ObjectId, ref: 'user',
        required:true
    }

});

const Factura = new mongoose.model('factura',facturaSchema); //copliar el esquema en un modelo

const factura = new Factura({
    telefono: "0912345678",
    direccion: "5th Ave",
    codPostal: "18932",
    ciudad: "New York",
    provincia: "NY",
    pais: "Estados Unidos",
    listaModulos: ["61562e9b53abf3120cd7fbac"],
    usuario: "61562d72dcf954049525116e"
});

//factura.save()