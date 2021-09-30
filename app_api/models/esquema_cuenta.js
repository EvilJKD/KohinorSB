const mongoose = require('mongoose');
const Modulo = mongoose.model('modulo');
const Usuario = mongoose.model('user');

const cuentaSchema = new mongoose.Schema({
    usuario: {
        type: {type: mongoose.Schema.ObjectId, ref: "Usuario"},
        required: true
    },
    listaModulos:{
        type: [{type: mongoose.Schema.ObjectId, ref: "Modulo"}],
        required: true
    },
    listaTickets: {
        type: [{type: mongoose.Schema.ObjectId, ref: "Ticket"}],
        required: true
    }
});

const Cuenta = new mongoose.model('cuenta',cuentaSchema); //copliar el esquema en un modelo

const cuenta = new Cuenta({
    nombre: 'Puntos de Venta',
    descripcion: 'Manejo de la información generada en el sitio físico de venta directa a los Clientes. Facilita el cobro inmediato en efectivo, cheque, tarjeta de crédito.',
    img: 'dummy.jpg',
    precio: 5
});