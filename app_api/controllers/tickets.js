// uso mongoose y modelo para acceder a la DB
const mongoose = require('mongoose'); // incorporo mongoose a la rest api
const tickets = mongoose.model('ticket'); // el modelo me permite interactuar con la coleccion tickets

//controladores

const ticketCreate=(req,res)=>{
    tickets.create({
        asunto: req.body.asunto,
        fecha: req.body.fecha,
        status: req.body.status,
        usuario: req.body.usuario
    }, (err, objetoTicket)=>{
        if(err){
            console.log("ERROR")
            return res
                .status(400)
                .json(err);
        } else {
            return res
                .status(201)
                .json(objetoTicket);
        }
    });
};

//listar todos los documentos de la coleccion
const ticketList = (req, res) => {
    tickets.aggregate([
        {
            $lookup:{
                "from":"users",
                "localField":"usuario",
                "foreignField":"_id",
                "as":"persona"
            }
        }
    ])
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

/* const ticketFindId = (req, res) => {
    const buscar = new RegExp(req.params.ticketid);
    console.log(`Buscar ticket con id: ${buscar}`);
    tickets
        .find({
            'id': buscar // String a buscar
        }) // obtener todos los documentos de la coleccion que cumplen con el criterio de busqueda
        .exec((err, objetoTicket) => {
            if (!objetoTicket || objetoTicket.length == 0) { // find no encontro el documentos en la coleccion
                console.log(`Ticket con ticketid: ${req.params.ticketid} no encontrado`);
                return res // respondo el mensaje en formato JSON y status HTTP 404
                    .status(404)
                    .json({
                        "Mensaje": "Ticket no encontrado"
                    });
            } else if (err) { // find encontro un error
                console.log(`Se encontro un error en la coleccion ${tickets} con nombre: ${buscar}`);
                return res // respondo el error en formato JSON y status HTTP 404
                    .status(404)
                    .json(err);
            }
            console.log(`Se encontró el documento con id ${req.params.ticketid}`);
            res // respondo los documentos encontrados en formato JSON y status HTTP 200
                .status(200)
                .json(objetoTicket);
        });
}; */

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
    //ticketFindId
};