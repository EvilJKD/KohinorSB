const request = require('request');

const axios =require('axios'); //Importacion del AXIOS

const apiOptions = {
    server: 'http://localhost:3000' // servidor local - desarrollo
};

if (process.env.NODE_ENV === 'production') {
    apiOptions.server = 'https://kohinor.herokuapp.com' // servidor remoto - producción
}


/* GET planes page. */
const planes = (req, res, body) => {
    res.render('planes',{
        title: 'Seleccion de Carritos',
        planes: body
    });
};

// const funciones = (req, res) => {
//     const path = '/api/modulo';
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
//             } else if (response.statusCode === 200 && body) { // además del statusCOde, el objeto resultante debe tener contenido
//                 console.log(body);
//                 planes(req, res, body);
//             } else { // en este caso renderizar la vista de manejo de errores
//                 console.log(response.statusCode);
//                 res.render('error', {
//                     mensaje: 'Existe un error en la colección de modulos'
//                 })
//             }
//         });
// };

const funciones = (req, res) => {
    const path = '/api/modulo';
    
    axios.get(`${apiOptions.server}${path}`) //Declaracion del path, se ejecuta la promesa
        .then((response) => { //Cuando el request es exitoso
            console.log('Axios Request', response);
            planes(req, res, response.data);
        })
        .catch(()=>{ //Cuando el request tiene algun error
            console.log(response.statusCode);
            res.render('error', {
                mensaje: 'Existe un error en la colección de usuarios'
            })
        });
};

module.exports = {
    funciones
};