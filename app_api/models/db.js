// Mpdelos

require('./esquema_users');
require('./esquema_module');
require('./esquema_ticket');
require('./esquema_factura');

const mongoose = require('mongoose'); // incorporar mongoose al proyecto

const readLine = require('readline'); // incorporar readline al proyecto
// escuchar el evento SIGINT de windows y luego emitirlo a traves de Node
if (process.platform === 'win32') {
    const rl = readLine.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.on('SIGINT', () => {
        process.emit("SIGINT"); // emitir el evento
    });
}

// funcion para cerrar la conexion a MONGO (mongoose)
const procShutdown = (msg, callback) => {
    mongoose.connection.close(() => {
        console.log(`Mongoose disconnected through ${msg}`);
        callback();
    });
};


// Eventos de terminacion de proceso
// windows : SIGINT
// nodemon : SIGUSR2
// Heroku  : SIGTERM

// Evento SIGINT - windows
process.on('SIGINT', () => {
    procShutdown('app windows termination', () => {
        process.exit(0);
    });
});

// Evento SIGUSR2 - nodemon
process.on('SIGUSR2', () => {
    procShutdown('Aplicación reiniciada por nodemon', () => {
        process.kill(process.pid, 'SIGUSR2');
    });
});

// Evento SIGTERM - heroku
process.on('SIGTERM', () => {
    procShutdown('Aplicación cerrada por Heroku', () => {
        process.exit(0);
    });
});

let dbURI = 'mongodb://localhost/db_kohinor'; // string de conexión
if (process.env.NODE_ENV === 'production') { // evaluo si la coneccion sera local o remota
    dbURI = process.env.MONGODB_URI;
}
mongoose.connect(dbURI, { useNewUrlParser: true }); // método de conexión

// Mensajes de los eventos de conexión
mongoose.connection.on('connected', () => {
    console.log(`Mongoose se conecto a ${dbURI}`);
});
mongoose.connection.on('error', () => {
    console.log('Mongoose error de conexion', err);
});
mongoose.connection.on('disconnected', () => {
    console.log('Mongoose se desconecto');
});

