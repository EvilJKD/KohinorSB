const request = require('request');

const apiOptions = {
    server: 'http://localhost:3000'
}
if (process.env.NODE_ENV === 'production') {
    apiOptions.server = 'https://kohinor.herokuapp.com/'; //servidor remoto - producción
}

 /* GET Registro. */
const registro = (req, res) => {
    res.render('registro',{title: 'Registro '});
};

const doAddUsers = (req, res) => {
    const path = '/api/users/';
    const postdata = {
        nombre: req.body.name,
        apellido: req.body.lastname,
        email: req.body.email,
        contraseña: req.body.crtpsw
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
                console.log("USUARIO CREADO");
                console.log(body);
                res.render('registro', {title: 'Registro'})
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
    registro,
    doAddUsers
};