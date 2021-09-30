// uso mongoose y modelo para acceder a la DB
const mongoose = require('mongoose'); // incorporo mongoose a la rest api
const modulos = mongoose.model('modulo'); // el modelo me permite interactuar con la coleccion modulos

//controladores

const moduloCreate=(req,res)=>{
    res
        .status(200)
        .json({"status": "Success Create"});
};

//listar todos los documentos de la coleccion
const moduloList = (req, res) => {
    modulos 
        .find()//obtener todos los documentos de la coleccion
        //.select('nombre apellido')
        .exec((err, objetoModulo)=> {
            if(!objetoModulo || objetoModulo.length == 0){
                console.log(`No existen documentos en la coleccion ${modulos}`);
                return res//responde el mensaje en formato json y status http 404
                    .status(404)
                    .json({
                        "Mensaje": "Factura no encontrado"
                    });   
            } else if (err){
                console.log(`Se encontro error en la coleccion ${modulos}`);
                return res
                    .status(404)
                    .json(err);
            }
            res
                .status(200)
                .json(objetoModulo);
        });
};

//buscar un usuario con userid
const moduloRead = (req, res) => {
    modulos 
        .findById(req.params.facturaid)
        .exec((err, objetoModulo)=> {
            if(!objetoModulo){
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
                .json(objetoModulo);
        });
   
};

const moduloUpdate = (req, res) => {
    res
        .status(200)
        .json({"status": "Success Update"});
};

const moduloDelete = (req, res) => {
    res
        .status(200)
        .json({"status": "Success Delete"});
};

module.exports = {
    moduloCreate,
    moduloDelete,
    moduloList,
    moduloRead,
    moduloUpdate
};