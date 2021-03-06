//REST API router
const express = require('express');
const router = express.Router();
const ctrlUsers = require('../controllers/users');
const ctrlModulo = require('../controllers/modulos');
const ctrlTicket = require('../controllers/tickets');
const ctrlFactura = require('../controllers/facturas');
const ctrlAuth = require('../controllers/authentication');
const ctrlSearch = require('../controllers/search');
//definir las rutas para las acciones sobre la coleccion users 

//USUARIOS
router
    .route('/users/')
    .post(ctrlUsers.userCreate)
    .get(ctrlUsers.userList)
router
    .route('/users/:userid')
    .get(ctrlUsers.userRead)
    .put(ctrlUsers.userUpdate)
    .delete(ctrlUsers.userDelete);

//MODULOS
router
    .route('/modulo')
    .post(ctrlModulo.moduloCreate)
    .get(ctrlModulo.moduloList)
router
    .route('/modulo/:moduloid')
    .get(ctrlModulo.moduloRead)
    .put(ctrlModulo.moduloUpdate)
    .delete(ctrlModulo.moduloDelete);

//TICKETS
router
    .route('/ticket/')
    .post(ctrlTicket.ticketCreate)
    .get(ctrlTicket.ticketList)
router
    .route('/ticket/:ticketid')
    .get(ctrlTicket.ticketRead)
    .put(ctrlTicket.ticketUpdate)
    .delete(ctrlTicket.ticketDelete)

//FACTURA
router
    .route('/factura')
    .post(ctrlFactura.facturaCreate)
    .get(ctrlFactura.facturaList)
router
    .route('/factura/:facturaid')
    .get(ctrlFactura.facturaRead)
//SEARCH
router
    .route('/searchticket')
    .post(ctrlSearch.ticketList)

 module.exports = router;

router.post('/registro', ctrlAuth.register);
router.post('/login', ctrlAuth.login);
