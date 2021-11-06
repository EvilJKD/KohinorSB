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
const renderOverview = (req, res, responseBody1, responseBody2 ) => {
    res.render('overview', {
        title: 'Overview',
        objetoUsers: responseBody1,
        objetoTicket: responseBody2

    });
};

// const promiseRequest = (method, path) => {
//     return new Promise((resolve, reject) => {
//         const requestOptions = {
//             url: `${apiOptions.server}${path}`,
//             method,
//             json: {}
//         };

//         request(
//             requestOptions,
//             (err, response, body) => {
//                 if (err) {
//                     return reject(err);
//                 } else if (response.statusCode !== 200) {
//                     return reject(response.statusCode);
//                 }
//                 return resolve(body);
//             });
//     });
// };

// // controlador para index
// const overview = async(req, res) => {
//     try {

//         const ticket = await promiseRequest('GET', '/api/ticket');
//         const ticketTable = ticket.map(result => {
//             return {
//                 asunto: result.asunto,
//                 status: result.status,
//                 usuario: result.usuario,
//                 fecha: result.fecha,
//                 Id: result._id
//             }
//         });

//         const users = await promiseRequest('GET', '/api/users');
//         const usersTable = users.map(result => {
//             return {
//                 nombre: result.nombre,
//                 apellido: result.apellido,
//                 email: result.email,
//                 contraseña: result.contraseña,
//                 Id: result._id
//             }
//         });

//         renderOverview(req, res, 
//             usersTable,
//             ticketTable,
//         );
//     } catch (error) {
//         console.log(error);
//     }
// };

//Tomando en cuenta la documentacion, se deben crean dos funciones que devuelvan la promesa de axios.

const getTickets = () => {
    const path = '/api/ticket';
    return axios.get(`${apiOptions.server}${path}`);
}
const getUsers = () => {
    const path = '/api/users';
    return axios.get(`${apiOptions.server}${path}`);
}

const overview =  (req, res) => {Promise.all([getTickets(), getUsers()])
    .then((results) => {
        //Arreglo de resultados
        const tickets = results[0].data;
        const users = results[1].data;

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

        //Mapeo de los usuarios para la tabla
        const usersTable = users.map(result => {
            return {
                nombre: result.nombre,
                apellido: result.apellido,
                email: result.email,
                contraseña: result.contraseña,
                Id: result._id
            }
        });

        //Renderizado de la vista
        renderOverview(req, res, 
            usersTable,
            ticketTable,
        );
    })
    .catch((error) => {
        console.log(error);
    })
};
module.exports = {
    overview
};




