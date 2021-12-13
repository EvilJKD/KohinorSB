
//Require de Axios
const axios = require('axios');
const fs = require('fs');

const apiOptions = {
    server: 'http://localhost:3000' // servidor local - desarrollo
};

if (process.env.NODE_ENV === 'production') {
    apiOptions.server = 'https://kohinor.herokuapp.com' // servidor remoto - producción
}


/* GET funcionalidades. */
const funcion = (req, res, body) => {
    res.render('funcion', {
        title: 'Funcion',
        functions: body
    });
};

const modulosAdmin = (req, res, body) => {
    res.render('modulos', {
        title: 'Modulos',
        modulos: body
    })
}
const renderCreateView = (req, res,body = null) => {
    res.render('crearModulo', {
        title: "Crear Modulo",
        descripcion: body.descripcion,
        nombre: body.nombre,
        precio: body.precio
    });
}
const renderEditarView = (req, res,body = null) => {
    res.render('crearModulo', {
        title: "Editar Modulo",
        descripcion: body.descripcion,
        nombre: body.nombre,
        precio: body.precio
    });
}

const funciones = (req, res) => {
    const path = '/api/modulo';

    axios.get(`${apiOptions.server}${path}`) //Declaracion del path, se ejecuta la promesa
        .then((response) => { //Cuando el request es exitoso
            console.log('Axios Request', response);
            funcion(req, res, response.data);
        })
        .catch(() => { //Cuando el request tiene algun error
            console.log(response.statusCode);
            res.render('error', {
                mensaje: 'Existe un error en la colección de usuarios'
            })
        });
};

const getModulos = (req, res) => {
    const path = '/api/modulo';

    axios.get(`${apiOptions.server}${path}`) //Declaracion del path, se ejecuta la promesa
        .then((response) => { //Cuando el request es exitoso
            //console.log('Axios Request', response);
            modulosAdmin(req, res, response.data);
        })
        .catch(() => { //Cuando el request tiene algun error
            console.log(response.statusCode);
            res.render('error', {
                mensaje: 'Existe un error en la colección de usuarios'
            })
        });
};

const deleteModulo = (req, res) => {
    const path = `/api/modulo/${req.params.moduloid}`;
    console.log("ENTRO EN EL DELETE MODULO");

    axios.delete(`${apiOptions.server}${path}`) //Declaracion del path, se ejecuta la promesa
        .then((response) => { //Cuando el request es exitoso
            console.log('Axios Request', response);
            res.redirect('/modulos');
        })
        .catch(() => { //Cuando el request tiene algun error
            console.log(response.statusCode);
            res.render('error', {
                mensaje: 'Existe un error en la colección de usuarios'
            })
        });
}

const createModulos = (req, res) => {
    const path = '/api/modulo';

    axios.post(`${apiOptions.server}${path}`, {
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            precio: req.body.precio,
            icono: req.file.filename + '.' + req.file.mimetype.split('/')[1]
        }) //Primer parametro es el url del request y el segundo es el body con los parametros
        .then((response) => { //Si el request es exitoso
            console.log("AXIOS REQUEST --- Modulo CREADO");
            console.log(req.body);
            fs.renameSync(req.file.path, req.file.path + '.' + req.file.mimetype.split('/')[1]);
            res.redirect('/modulos')
        })
        .catch((error) => { //Si es que hay algun error en el request
            console.log('AXIOS - statusCode: ', error.status);
            console.log('AXIOS - Error: ', error);
            console.log('AXIOS - Req.Body', req.body);
            res.redirect('/modulos');
        })
}

const getModuloAndDisplay = (req, res) => {
    const path = `/api/modulo/${req.params.moduloid}`;

    axios.get(`${apiOptions.server}${path}`) //Declaracion del path, se ejecuta la promesa
        .then((response) => { //Cuando el request es exitoso
            console.log('Axios Request', response);
            renderEditarView(req, res, response.data);
        })
        .catch(() => { //Cuando el request tiene algun error
            console.log(response.statusCode);
            res.render('error', {
                mensaje: 'Existe un error en la colección de usuarios'
            })
        });
}

const updateModulo = (req, res) => {
    const path = `/api/modulo/${req.params.moduloid}`;

    axios.put(`${apiOptions.server}${path}`, req.file ? {
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            precio: req.body.precio,
            icono: req.file.filename + '.' + req.file.mimetype.split('/')[1]
        }:
        {
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            precio: req.body.precio
        }) //Primer parametro es el url del request y el segundo es el body con los parametros
        .then((response) => { //Si el request es exitoso
            console.log("AXIOS REQUEST --- Modulo EDITADO");
            console.log(req.body);
            fs.renameSync(req.file.path, req.file.path + '.' + req.file.mimetype.split('/')[1]);
            res.redirect('/modulos')
        })
        .catch((error) => { //Si es que hay algun error en el request
            console.log('AXIOS - statusCode: ', error.status);
            console.log('AXIOS - Error: ', error);
            console.log('AXIOS - Req.Body', req.body);
            res.redirect('/modulos');
        })
}

module.exports = {
    funciones,
    getModulos,
    deleteModulo,
    createModulos,
    renderCreateView,
    getModuloAndDisplay,
    updateModulo
};