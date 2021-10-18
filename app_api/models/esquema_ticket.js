const mongoose = require('mongoose');
const Usuario = mongoose.model('user');

const ticketsSchema = new mongoose.Schema({
    asunto: {
        type: String,
        required: true
    },
    fecha:{
        type: Date,
        'default': Date.now
    },
    status:{
        type: String,
        enum: ['Enviado', 'Pendiente', 'En Proceso', 'Procesado'],
        required: true
    },
    usuario:{
        type: mongoose.Schema.ObjectId, ref: 'user',
        required: true,
    }
});

const Ticket = new mongoose.model('ticket',ticketsSchema); //copliar el esquema en un modelo

const ticket = new Ticket({
    asunto: "Falla en el sistema",
    status: "Enviado",
    usuario: '61551c2556991aed2b36cf48'
});

   //.ticketsave();