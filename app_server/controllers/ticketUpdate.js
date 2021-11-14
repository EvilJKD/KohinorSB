const request = require('request');

const axios = require('axios');

const apiOptions = {
    server: 'http://localhost:3000'
}
if (process.env.NODE_ENV === 'production') {
    apiOptions.server = 'https://kohinor.herokuapp.com'; //servidor remoto - producción
}

 /* GET Registro. */
const renderUpdate = (req, res) => {
    res.render('ticketUpdate',{title: 'ticketUpdate '});
};
const UpdateTicket = (req, res) => {
    res.redirect(`/ticketUpdate/${req.body.id}`);
};
const ticketRead = (req, res) => {
    const path = `/api/ticket/${req.params.ticketid}`;
    axios.get(`${apiOptions.server}${path}`)
        .then((response) =>{ //Si es exitoso
            console.log("AXIOS", response.data);
            res.render("ticketUpdate",{
                title: 'ticketUpdate ',
                _id: response.data.ticketid
            });
        })
        .catch((error) => { //Si hay algun error
            console.log("AXIOS - StatusCode", error.status);
            console.log("AXIOS", error);
        });
};
module.exports = {
    renderUpdate,
    UpdateTicket,
    ticketRead
};