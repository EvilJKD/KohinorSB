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


const ticketUpdate = (req, res) => {
    if (!req.params.ticketid) {
        return res
            .status(404)
            .json({
                "message": "Ingrese un ticketid válido"
            });
    }
    tickets
        .findById(req.params.ticketid)
        .exec((err, objetoTicket) => {
            if (!objetoTicket) {
                return res
                    .status(404)
                    .json({
                        "message": "ticketid no existe"
                    })
            } else if (err) {
                return res
                    .status(400)
                    .json(err);
            }
            objetoTicket.fecha = req.body.fecha;
            objetoTicket.status = req.body.status;
            objetoTicket.save((err, tickets) => {
                if (err) {
                    res
                        .status(404)
                        .json(err);
                } else {
                    res
                        .status(200)
                        .json(tickets);
                }
            })
        })
};

const ticketDelete = (req, res) => {
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
            else{
                console.log("OBJETO A ELIMINAR", objetoTicket);
                tickets.deleteOne({"_id": req.params.ticketid});
            }
        });
}



module.exports = {
    ticketCreate,
    ticketList,
    ticketRead,
    ticketUpdate,
    ticketDelete
    //ticketFindId
};