/* GET ovrview. */
const { response } = require('express');
const request = require('request');


const axios = require('axios'); //Import de AXIOS

// Definir las URLs para los ambientes de desarrollo y producción
const apiOptions = {
    server: 'http://localhost:3000' // servidor local - desarrollo
};

if (process.env.NODE_ENV === 'production') {
    apiOptions.server = 'https://kohinor.herokuapp.com' // servidor remoto - producción
}


/* renderizar home page. */
const renderOverview = (req, res, responseBody1 ) => {
    res.render('overview', {
        title: 'Overview',
        usuario: `${req.user.nombre} ${req.user.apellido}`,
        objetoTicket: responseBody1

    });
};
//Tomando en cuenta la documentacion, se deben crean dos funciones que devuelvan la promesa de axios.

const getTickets = (req) => {
    const path = '/api/searchticket';
    console.log("REQ USER", req.user);
    return axios.post(`${apiOptions.server}${path}`,{
        codigo: req.user._id
    });
}
/* const getUsers = () => {
    const path = '/api/users';
    return axios.get(`${apiOptions.server}${path}`);
} */

const overview =  (req, res) => {Promise.all([getTickets(req)])
    .then((results) => {
        //Arreglo de resultados
        const tickets = results[0].data;

        console.log("TICKETS", tickets);
        //Mapeo de los tickets para la tabla
        const ticketTable = tickets.map(result => {
            return {
                asunto: result.asunto,
                status: result.status,
                usuario: result.usuario,
                fecha: result.fecha,
                Id: result._id
            }
        });

/*         //Mapeo de los usuarios para la tabla
        const usersTable = users.map(result => {
            return {
                nombre: result.nombre,
                apellido: result.apellido,
                email: result.email,
                contraseña: result.contraseña,
                Id: result._id
            }
        }); */

        //Renderizado de la vista
        renderOverview(req, res, 
            ticketTable
        );
    })
    .catch((error) => {
        renderOverview(req, res, []);
        console.log(error);
    })
};
module.exports = {
    overview
};




