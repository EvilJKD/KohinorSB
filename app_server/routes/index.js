var express = require('express');
var router = express.Router();
const ctrlMain = require('../controllers/main');
const crtAbout = require('../controllers/about'); //Controladores / About
const crtKohinor = require('../controllers/kohinor'); 
const crtlFuncion = require('../controllers/funcionalidades');
const crtlContacto = require('../controllers/contacto');
const crtlLogin = require('../controllers/login');
const crtlRegistro = require('../controllers/registro');
const crtlOvrview = require('../controllers/overview');
const crtlTicket = require('../controllers/ticket');
const crtlPlanes = require('../controllers/planes');
const crtlCarrito = require('../controllers/carrito');
const crtlit_usrs = require('../controllers/it_usrs');
const crtlFactura = require('../controllers/factura');
const crtlConfirmar = require('../controllers/confirmar');
const crtlDshboard = require('../controllers/dshboard');
const crtlcrearTicket = require('../controllers/crearTicket');
const crtlTicketUpdate = require('../controllers/ticketUpdate');

/* GET home page. */
router.get('/', ctrlMain.index);
router.get('/about', crtAbout.about); //Invoca al controlador de about
router.get('/kohinor', crtKohinor.kohinor);
router.get('/funcion', crtlFuncion.funciones);
router.get('/contacto', crtlContacto.contacto);
router.get('/login', crtlLogin.login);
router.get('/registro', crtlRegistro.registro);
router.get('/overview', crtlOvrview.overview);
router.get('/ticket', crtlTicket.ticket);
router.get('/planes', crtlPlanes.funciones);
router.get('/carrito', crtlCarrito.carrito);
router.get('/it_usrs', crtlit_usrs.it_usrs);
router.get('/factura',crtlFactura.factura);
router.get('/confirmar', crtlConfirmar.confirmar);
router.get('/dshboard', crtlDshboard.dshboard);
router.get('/crearTicket', crtlcrearTicket.crearticket);
//router.get('/ticketUpdate', crtlTicketUpdate.ticketUpdate);

/* POST Creación de Usuarios - Formulario. */
router.post('/registro', crtlRegistro.doAddUsers);
/* POST Creación de ticket - Formulario. */
router.post('/crearTicket', crtlcrearTicket.doAddTicket);

router
    .route('/ticketUpdate')
    .get(crtlTicketUpdate.ticketEdit)
    .post(crtlTicketUpdate.UpdateTicket);
router
    .route('/ticketUpdate/:ticketid')
    .get(crtlTicketUpdate.ticketRead)
    //.post(crtlTicketUpdate.doUpdateTicket);

module.exports = router;
