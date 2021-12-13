const { response } = require('express');
const request = require('request');
const Swal = require('sweetalert2')
const axios = require('axios');

// Definir las URLs para los ambientes de desarrollo y producción
const apiOptions = {
    server: 'http://localhost:3000' // servidor local - desarrollo
};

if (process.env.NODE_ENV === 'production') {
    apiOptions.server = 'https://kohinor.herokuapp.com' // servidor remoto - producción
}


/* renderizar home page. */
const renderTicket = (req, res, responseBody) => {
    res.render('ticket', {
        title: 'Tickets',
        objetoTickets: responseBody
            // nombre: responseBody.nombre,
            // apellido: responseBody.apellido,
            // direccion: responseBody.direccion,
            // carrera: responseBody.carrera
    });
};
const renderTicketAdmin = (req, res, responseBody) => {
    res.render('ticketAdmin', {
        title: 'Tickets',
        objetoTickets: responseBody
            // nombre: responseBody.nombre,
            // apellido: responseBody.apellido,
            // direccion: responseBody.direccion,
            // carrera: responseBody.carrera
    });
};


//Aplicacion de Axios para el request
const ticket = (req, res) => {
    const path = '/api/searchticket';

    axios.post(`${apiOptions.server}${path}`,{
        codigo: req.user._id
    })
        .then((response) =>{ //Si es exitoso
            console.log("AXIOS", response.data);
            renderTicket(req, res, response.data);
        })
        .catch((error) => { //Si hay algun error
            console.log("AXIOS - StatusCode", error.status);
            console.log("AXIOS", error);
            renderTicket(req, res, []);
        });
};

const ticketAdmin = (req, res) => {
    const path = '/api/ticket';

    axios.get(`${apiOptions.server}${path}`)
        .then((response) =>{ //Si es exitoso
            console.log("AXIOS", response.data);
            renderTicketAdmin(req, res, response.data);
        })
        .catch((error) => { //Si hay algun error
            console.log("AXIOS - StatusCode", error.status);
            console.log("AXIOS", error);
            renderTicketAdmin(req, res, []);
        });
};
const deleteTicket = (req, res) => {
    const path = `/api/ticket/${req.params.ticketid}`;
    console.log("ENTRO EN EL DELETE ticket");
    axios.delete(`${apiOptions.server}${path}`) //Declaracion del path, se ejecuta la promesa 
        .then((response) => { //Cuando el request es exitoso
            console.log('Axios Request', response);
            res.redirect('/ticket');
        })
        .catch(() => { //Cuando el request tiene algun error
            console.log(response.statusCode);
            res.render('error', {
                mensaje: 'Existe un error en la colección de usuarios'
            })
        });
}



module.exports = {
    ticket,
    deleteTicket,
    ticketAdmin
};