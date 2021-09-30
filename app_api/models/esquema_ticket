const ticketsSchema = new mongoose.Schema({
    aunto: {
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
    }
})


const Modulo = new mongoose.model('modulo',moduleSchema); //copliar el esquema en un modelo

const modulo = new Modulo({
    nombre: 'Puntos de Venta',
    descripcion: 'Manejo de la información generada en el sitio físico de venta directa a los Clientes. Facilita el cobro inmediato en efectivo, cheque, tarjeta de crédito.',
    img: 'dummy.jpg',
    precio: 5
});