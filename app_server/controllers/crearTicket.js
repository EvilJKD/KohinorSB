const request = require('request');

const axios = require('axios');

const apiOptions = {
    server: 'http://localhost:3000'
}
if (process.env.NODE_ENV === 'production') {
    apiOptions.server = 'https://kohinor.herokuapp.com'; //servidor remoto - producción
}

 /* GET Registro. */
const crearticket = (req, res) => {
    res.render('crearTicket',{title: 'crearticket '});
};


const doAddTicket = (req, res) => {
    const path = '/api/ticket/';

    axios.post(`${apiOptions.server}${path}`,{
        asunto: req.body.asunto,
        status: req.body.status,
        usuario: req.body.usuario,
        fecha: req.body.fecha
    })
    .then((response) => {
        console.log("AXIOS REQUEST - Ticket Enviado");
        console.log(req.body);
        res.render('crearTicket', {title: 'crearticket'})
    }) 
    .catch((error) => {
        console.log('AXIOS - statusCode: ', error.status);
        console.log('AXIOS - Error: ', error);
        console.log('AXIOS - Req.Body', req.body);
    })
}

module.exports = {
    crearticket,
    doAddTicket
};