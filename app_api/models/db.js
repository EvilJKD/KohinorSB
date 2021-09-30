// Mpdelos

require('./esquema_users');
require('./esquema_module');

const mongoose = require('mongoose'); //incorporar mongoose al proyecto
const readline = require('readline'); //incorporar readline al proycto
//escuchar el evento SIGNINT de window y luego emitirlo a traves de Node
if(process.platform === 'win32'){
    const rl = readline .createInterface({
        input: process.stdin, 
        output: process.stdout
    });
    rl.on ('SIGINT', () => {
        process.emit("SIGINT"); //emitir el evento
    });
};

//funcion para crerrar conexion a MONGO (mongoose)

const procShutdown = (msg, db_kohinor, db_log) => {
    mongoose.connection.close(() =>{
        console.log(`Mongoose desconectado desde ${msg}`);
        db_kohinor();
        db_log();
        
    });
};

//eventos de terminacion de procesos
//window : SIGINT
//nodemon : SIGUSR2
//Heroku : SIGTERM

// Evento SIGINT - win32
process.on('SIGINT', ()=> {
    procShutdown('Aplicacion cerrada por windows', () =>{
        process.exit(0)}, logDB.close(()=>{
            console.log('Mongoose log cerrado');
        })
    );
});

// Evento SIGUSR2 - nodemon
process.on('SIGUSR2', ()=> {
    procShutdown('Aplicacion reinciada por nodemon', () =>{
        process.kill(process.pid, 'SIGUSR2');
    });
});

// Evento SIGTERM - heroku
process.on('SIGTERM', ()=> {
    procShutdown('Aplicacion cerrada por HEROKU', () =>{
        process.exit(0);
    });
});

let dbURI = 'mongodb://localhost/db_kohinor'; // string de conexion
if(process.env.NODE_ENV === 'production'){ //evaluo si la coneccion sera local o remota
    dbURI = process.env.MONGODB_URI;
}
mongoose.connect(dbURI, {useNewUrlParser: true} ); //metodo de conexion
 
//mensajes de los eventos de conexion
mongoose.connection.on('connected', () => {
    console.log(`Mongoose se conecto a ${dbURI}`);
});
mongoose.connection.on('error', err => {
    console.log('Mongoose error de conexion', err);
});
mongoose.connection.on('disconnected', () => {
    console.log('Mongoose se desconecto');
});