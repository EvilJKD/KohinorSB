const { response } = require('express');
const request = require('request');

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


// controlador para index
// const ticket = (req, res) => {
//     const path = '/api/ticket/';
//     const requestOptions = {
//         url: `${apiOptions.server}${path}`,
//         method: 'GET',
//         json: {}
//     };

//     request(
//         requestOptions, // Opciones
//         (err, response, body) => { // callback con sus 3 partes
//             // err - objeto con el error
//             // response - respuesta completa (incluye status)
//             // body - cuerpo de la respuesta
//             if (err) {
//                 console.log(err);
//             } else if (response.statusCode === 200) {
//                 console.log(body);
//                 renderTicket(req, res, body);
//             } else {
//                 console.log(response.statusCode);
//             }
//         });
// };

//Aplicacion de Axios para el request
const ticket = (req, res) => {
    const path = '/api/ticket/';

    axios.get(`${apiOptions.server}${path}`)
        .then((response) =>{ //Si es exitoso
            console.log("AXIOS", response.data);
            renderTicket(req, res, response.data);
        })
        .catch((error) => { //Si hay algun error
            console.log("AXIOS - StatusCode", error.status);
            console.log("AXIOS", error);
        });
};

module.exports = {
    ticket
};