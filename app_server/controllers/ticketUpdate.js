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
        id: responseBody._id
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
            res.redirect('/');
        });
};
module.exports = {
    ticketEdit,
    UpdateTicket,
    ticketRead
};