// uso mongoose y modelo para acceder a la DB
const mongoose = require('mongoose'); // incorporo mongoose a la rest api
const facturas = mongoose.model('factura'); // el modelo me permite interactuar con la coleccion facturas
//controladores

const facturaCreate=(req,res)=>{
    facturas.create({
        telefono: req.body.telefono,
        direccion: req.body.direccion,
        codPostal: req.body.codPostal,
        ciudad: req.body.ciudad, 
        provincia: req.body.provincia,
        pais: req.body.pais, 
        listaModulos: req.body.listaModulos,
        numUsuarios: req.body.numUsuarios
    }, (err, objetoFactura)=>{
        if(err){
            console.log('Error Factura', err);
            console.log('REQ.BODY', req.body);
            return res
                .status(400)
                .json(err);
        } else {
            return res
                .status(201)
                .json(objetoFactura);
        }
    });
};

//listar todos los documentos de la coleccion
const facturaList = (req, res) => {
    facturas.find({})
        .populate('usuario').populate('listaModulos')
        .exec((err, objetoFactura)=> {
            if(!objetoFactura || objetoFactura.length == 0){
                console.log(`No existen documentos en la coleccion ${facturas}`);
                return res//responde el mensaje en formato json y status http 404
                    .status(404)
                    .json({
                        "Mensaje": "Factura no encontrado"
                    });   
            } else if (err){
                console.log(`Se encontro error en la coleccion ${facturas}`);
                return res
                    .status(404)
                    .json(err);
            }
            res
                .status(200)
                .json(objetoFactura);
        });
};

//buscar un usuario con facturaid
const facturaRead = (req, res) => {
    facturas 
        .findById(req.params.facturaid)
        .populate('usuario').populate('listaModulos')
        .exec((err, objetoFactura)=> {
            if(!objetoFactura){
                console.log(`Factura con facturaid: ${req.params.facturaid} no encontrado`);
                return res
                    .status(404)
                    .json({
                        "Mensaje": "Factura no encontrado"
                    });   
            } else if (err){
                return res
                    .status(404)
                    .json(err);
            }
            res
                .status(200)
                .json(objetoFactura);
        });
   
};




module.exports = {
    facturaCreate,
    facturaList,
    facturaRead,
};