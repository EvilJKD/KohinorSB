
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
    nombre: 'Puntos de Venta',
    descripcion: 'Manejo de la información generada en el sitio físico de venta directa a los Clientes. Facilita el cobro inmediato en efectivo, cheque, tarjeta de crédito.',
    img: 'dummy.jpg',
    precio: 5
});

module.exports = Modulo;