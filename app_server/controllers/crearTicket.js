const request = require('request');

const apiOptions = {
    server: 'http://localhost:3000'
}
if (process.env.NODE_ENV === 'production') {
    apiOptions.server = 'https://https://proyecto-kohinor-sb-2021.herokuapp.com'; //servidor remoto - producción
}

 /* GET Registro. */
const crearticket = (req, res) => {
    res.render('crearticket',{title: 'crearticket '});
};

const doAddTicket = (req, res) => {
    const path = '/api/ticket/';
    const postdata = {
        asunto: req.body.asunto,
        status: req.body.status,
        usuario: req.body.usuario,
        fecha: req.body.fecha
    };
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'POST',
        json: postdata
    }

    request(
        requestOptions,
        (err, {statusCode}, body) => {
            if(statusCode === 201){
                console.log("Ticket Enviado");
                console.log(body);
                res.render('crearticket', {title: 'crearticket'})
            } else{
                console.log('statusCode: ', statusCode);
                console.log('Error: ', err);
                console.log('Req.Body', req.body);
                console.log('RequestOptions: ', requestOptions);
            }
        }
    )
}

module.exports = {
    crearticket,
    doAddTicket
};