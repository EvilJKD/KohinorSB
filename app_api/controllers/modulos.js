// uso mongoose y modelo para acceder a la DB
const mongoose = require('mongoose'); // incorporo mongoose a la rest api
const modulos = mongoose.model('modulo'); // el modelo me permite interactuar con la coleccion modulos

//controladores

const moduloCreate = (req, res) => {
    modulos.create({
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        precio: req.body.precio
    }, (err, objeto) => {
        if (err) {
            return res
                .status(400)
                .json(err);
        } else {
            return res
                .status(201)
                .json(objeto);
        }
    });
};

//listar todos los documentos de la coleccion
const moduloList = (req, res) => {
    modulos
        .find() //obtener todos los documentos de la coleccion
        //.select('nombre apellido')
        .exec((err, objetoModulo) => {
            if (!objetoModulo || objetoModulo.length == 0) {
                console.log(`No existen documentos en la coleccion ${modulos}`);
                return res //responde el mensaje en formato json y status http 404
                    .status(404)
                    .json({
                        "Mensaje": "Modulo no encontrado"
                    });
            } else if (err) {
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
        .findById(req.params.moduloid)
        .exec((err, objetoModulo) => {
            if (!objetoModulo) {
                console.log(`Modulo con moduloid: ${req.params.moduloid} no encontrado`);
                return res
                    .status(404)
                    .json({
                        "Mensaje": "Modulo no encontrado"
                    });
            } else if (err) {
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
    if (!req.params.moduloid) {
        return res
            .status(404)
            .json({
                "message": "Ingrese un room válido pls"
            });
    }
    modulos
        .findById(req.params.moduloid)
        .exec((err, objeto) => {
            if (!objeto) {
                return res
                    .status(404)
                    .json({
                        "message": "room no existe"
                    })
            } else if (err) {
                return res
                    .status(400)
                    .json(err);
            }
            objeto.nombre = req.body.nombre;
            objeto.descripcion = req.body.descripcion;
            objeto.precio = req.body.precio;
            objeto.save((err, nuevoObj) => {
                if (err) {
                    res
                        .status(404)
                        .json(err);
                } else {
                    res
                        .status(200)
                        .json(nuevoObj);
                }
            })
        })
};

const moduloDelete = (req, res) => {
    if (req.params.moduloid) {
        modulos
            .findByIdAndDelete(req.params.moduloid)
            .exec((err) => {
                if (err) {
                    return res
                        .status(404)
                        .json(err)
                }
                res
                    .status(204)
                    .json(null)
            });
    } else {
        res
            .status(404)
            .json({ "Mensaje": "Modulo no encontrado" });
    }
};

module.exports = {
    moduloCreate,
    moduloDelete,
    moduloList,
    moduloRead,
    moduloUpdate
};