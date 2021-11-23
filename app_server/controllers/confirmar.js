var sessionStorage = require('sessionstorage');

const axios = require('axios'); //Importar el AXIOS

const apiOptions = {
    server: 'http://localhost:3000'
}
if (process.env.NODE_ENV === 'production') {
    apiOptions.server = 'https://kohinor.herokuapp.com'; //servidor remoto - producción
}

const confirmar = (req, res) => {
    res.render('confirmar',{
        title: 'Confirmar'});
}

const doAddFactura = (req, res) => {
    const path = '/api/factura/';
    console.log('MODULOS ARRAY', JSON.parse(sessionStorage.getItem('comprarModulos')));
    axios.post(`${apiOptions.server}${path}`,{
            telefono: sessionStorage.getItem('telefono'),
            direccion: sessionStorage.getItem('direccion'),
            codPostal: sessionStorage.getItem('codPostal'),
            ciudad:sessionStorage.getItem('ciudad'), 
            provincia:sessionStorage.getItem('provincia'),
            pais: sessionStorage.getItem('pais'), 
            listaModulos: sessionStorage.getItem('comprarModulos'),
            numUsuarios: sessionStorage.getItem('numUsuarios')
    }) //Primer parametro es el url del request y el segundo es el body con los parametros
    .then((response)=> { //Si el request es exitoso
        console.log("AXIOS REQUEST --- USUARIO CREADO");
        console.log(req.body);
        res.render('registro', {title: 'Registro'})
    })
    .catch((error)=> { //Si es que hay algun error en el request
        console.log('MODULOS REGISTRADOS', JSON.parse(sessionStorage.getItem('comprarModulos')));
        console.log('AXIOS - statusCode: ', error.status);
        console.log('AXIOS - Error: ', error);
        console.log('AXIOS - Req.Body', req.body);
    })
          
}

module.exports = {
    confirmar,
    doAddFactura
};