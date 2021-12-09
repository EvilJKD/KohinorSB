// uso mongoose y modelo para acceder a la DB
const mongoose = require('mongoose'); // incorporo mongoose a la rest api
const users = mongoose.model('user'); // el modelo me permite interactuar con la coleccion users

//controladores

const userCreate=(req,res)=>{
    users.create({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        email: req.body.email,
        contrasena: req.body.contrasena
    }, (err, objetoUser)=>{
        if(err){
            return res
                .status(400)
                .json(err);
        } else {
            return res
                .status(201)
                .json(objetoUser);
        }
    });
};

//listar todos los documentos de la coleccion
const userList = (req, res) => {
    users 
        .find()//obtener todos los documentos de la coleccion
        //.select('nombre apellido')
        .exec((err, objectoUsuario)=> {
            if(!objectoUsuario || objectoUsuario.length == 0){
                console.log(`No existen documentos en la coleccion ${users}`);
                return res//responde el mensaje en formato json y status http 404
                    .status(404)
                    .json({
                        "Mensaje": "Usuario no encontrado"
                    });   
            } else if (err){
                console.log(`Se encontro error en la coleccion ${users}`);
                return res
                    .status(404)
                    .json(err);
            }
            res
                .status(200)
                .json(objectoUsuario);
        });
};

//buscar un usuario con userid
const userRead = (req, res) => {
    users 
        .findById(req.params.userid)
        .exec((err, objectoUsuario)=> {
            if(!objectoUsuario){
                console.log(`Usuario con userid: ${req.params.userid} no encontrado`);
                return res
                    .status(404)
                    .json({
                        "Mensaje": "Usuario no encontrado"
                    });   
            } else if (err){
                return res
                    .status(404)
                    .json(err);
            }
            res
                .status(200)
                .json(objectoUsuario);
        });
   
};

const userUpdate = (req, res) => {
    res
        .status(200)
        .json({"status": "Success Update"});
};

const userDelete = (req, res) => {
    res
        .status(200)
        .json({"status": "Success Delete"});
};

module.exports = {
    userCreate,
    userDelete,
    userList,
    userRead,
    userUpdate
};