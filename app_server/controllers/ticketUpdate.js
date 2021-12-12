const request = require('request');

const axios = require('axios');

const apiOptions = {
    server: 'http://localhost:3000'
}
if (process.env.NODE_ENV === 'production') {
    apiOptions.server = 'https://kohinor.herokuapp.com'; //servidor remoto - producción
}

/* GET Registro. */
const ticketEdit = (req, res, responseBody) => {
    res.render('ticketUpdate', {
        title: 'ticketUpdate ',
        id: responseBody._id,
        asunto: responseBody.asunto,
        usuario: responseBody.usuario.nombre,
        fecha: responseBody.fecha,
        status: responseBody.status

    });
};
/* const UpdateTicket = (req, res) => {
    res.redirect(`/ticketUpdate/${req.body.id}`);
};  */

const UpdateTicket = (req, res) => {
    res.render('ticketUpdate', {
        title: "UPDATE"
    })
}
const ticketRead = (req, res) => {
    const path = `/api/ticket/${req.params.ticketid}`;
    console.log('PATH',`${apiOptions.server}${path}`);
    axios.get(`${apiOptions.server}${path}`)
        .then((response) => { //Si es exitoso
            console.log("AXIOS", response.data);
            ticketEdit(req, res, response.data);
        })
        .catch((error) => { //Si hay algun error
            console.log("AXIOS - StatusCode", error.status);
            console.log("AXIOS", error);
            res.redirect('/it_usrs');
        });
};



const doUpdateTicket = (req, res) => {
    const path = `/api/ticket/${req.params.ticketid}`;

    axios.put(`${apiOptions.server}${path}`, {
            asunto: req.body.asunto,
            status: req.body.status,
            fecha: req.body.fecha
        }) //Primer parametro es el url del request y el segundo es el body con los parametros
        .then((response) => { //Si el request es exitoso
            console.log("AXIOS REQUEST --- Ticket EDITADO");
            console.log(req.body);
            res.redirect('/ticketAdmin')
        })
        .catch((error) => { //Si es que hay algun error en el request
            console.log('AXIOS - statusCode: ', error.status);
            console.log('AXIOS - Error: ', error);
            console.log('AXIOS - Req.Body', req.body);
            res.redirect('/ticketAdmin');
        })
}

module.exports = {
    ticketEdit,
    UpdateTicket,
    ticketRead,
    doUpdateTicket
};