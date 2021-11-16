const request = require('request');

const axios = require('axios'); //Importar el AXIOS

const apiOptions = {
    server: 'http://localhost:3000'
}
if (process.env.NODE_ENV === 'production') {
    apiOptions.server = 'https://kohinor.herokuapp.com'; //servidor remoto - producción
}

 /* GET Registro. */
const registro = (req, res) => {
    res.render('registro',{title: 'Registro '});
};


const doAddUsers = (req, res) => {
    const path = '/api/users/';

    axios.post(`${apiOptions.server}${path}`,{
        nombre: req.body.name,
        apellido: req.body.lastname,
        email: req.body.email,
        contraseña: req.body.crtpsw
    }) //Primer parametro es el url del request y el segundo es el body con los parametros
    .then((response)=> { //Si el request es exitoso
        console.log("AXIOS REQUEST --- USUARIO CREADO");
        console.log(req.body);
        res.render('registro', {title: 'Registro'})
    })
    .catch((error)=> { //Si es que hay algun error en el request
        console.log('AXIOS - statusCode: ', error.status);
        console.log('AXIOS - Error: ', error);
        console.log('AXIOS - Req.Body', req.body);
    })
          
}

module.exports = {
    registro,
    doAddUsers
};