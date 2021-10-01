// uso mongoose y modelo para acceder a la DB
const mongoose = require('mongoose'); // incorporo mongoose a la rest api
const tickets = mongoose.model('ticket'); // el modelo me permite interactuar con la coleccion tickets

//controladores

const ticketCreate=(req,res)=>{
    res
        .status(200)
        .json({"status": "Success Create"});
};

//listar todos los documentos de la coleccion
const ticketList = (req, res) => {
    tickets 
        .find()//obtener todos los documentos de la coleccion
        //.select('nombre apellido')
        .populate('usuario')
        .exec((err, objetoTicket)=> {
            if(!objetoTicket || objetoTicket.length == 0){
                console.log(`No existen documentos en la coleccion ${tickets}`);
                return res//responde el mensaje en formato json y status http 404
                    .status(404)
                    .json({
                        "Mensaje": "Ticket no encontrado"
                    });   
            } else if (err){
                console.log(`Se encontro error en la coleccion ${tickets}`);
                return res
                    .status(404)
                    .json(err);
            }
            res
                .status(200)
                .json(objetoTicket);
        });
};

//buscar un usuario con ticketid
const ticketRead = (req, res) => {
    tickets 
        .findById(req.params.ticketid)
        .populate('usuario')
        .exec((err, objetoTicket)=> {
            if(!objetoTicket){
                console.log(`Ticket con ticketid: ${req.params.ticketid} no encontrado`);
                return res
                    .status(404)
                    .json({
                        "Mensaje": "Ticket no encontrado"
                    });   
            } else if (err){
                return res
                    .status(404)
                    .json(err);
            }
            res
                .status(200)
                .json(objetoTicket);
        });
   
};

const ticketUpdate = (req, res) => {
    res
        .status(200)
        .json({"status": "Success Update"});
};



module.exports = {
    ticketCreate,
    ticketList,
    ticketRead,
    ticketUpdate
};