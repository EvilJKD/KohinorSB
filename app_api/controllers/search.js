const mongoose = require('mongoose'); // incorporo mongoose a la rest api
const tickets = mongoose.model('ticket');
const facturas = mongoose.model('factura');

const ticketList = (req, res) => {
    console.log("API REQ BODY", req.body);
    tickets
    .find({
        'usuario': req.body.codigo
    })
   /*  .aggregate([
        {
            $lookup:{
                "from":"users",
                "localField":"usuario",
                "foreignField":"_id",
                "as":"persona"
            }
        }
    ]) */
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
                    .status(400)
                    .json(err);
            }
            res
                .status(200)
                .json(objetoTicket);
        });
};

module.exports = {
    ticketList
};