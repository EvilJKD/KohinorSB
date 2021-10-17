/* GET ovrview. */
const { response } = require('express');
const request = require('request');

// Definir las URLs para los ambientes de desarrollo y producción
const apiOptions = {
    server: 'http://localhost:3000' // servidor local - desarrollo
};

if (process.env.NODE_ENV === 'production') {
    apiOptions.server = 'https://proyecto-kohinor-sb-2021.herokuapp.com' // servidor remoto - producción
}


/* renderizar home page. */
const renderOverview = (req, res, responseBody) => {
    res.render('overview', {
        title: 'Overview',
        objetoUsers: responseBody

    });
};

const promiseRequest = (method, path) => {
    return new Promise((resolve, reject) => {
        const requestOptions = {
            url: `${apiOptions.server}${path}`,
            method,
            json: {}
        };

        request(
            requestOptions,
            (err, response, body) => {
                if (err) {
                    return reject(err);
                } else if (response.statusCode !== 200) {
                    return reject(response.statusCode);
                }
                return resolve(body);
            });
    });
};

// controlador para index
const overview = async(req, res) => {
    try {

        const ticket = await promiseRequest('GET', '/api/ticket');
        const ticketTable = ticket.map(result => {
            return {
                asunto: result.asunto,
                status: result.status,
                usuario: result.usuario,
                fecha: result.fecha,
                Id: result._id
            }
        });

        const users = await promiseRequest('GET', '/api/users');
        const usersTable = users.map(result => {
            return {
                nombre: result.nombre,
                apellido: result.apellido,
                email: result.apellido,
                contraseña: result.contraseña,
                Id: result._id
            }
        });

        renderOverview(req, res, {
            usersTable,
            ticketTable,
        });
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    overview
};




