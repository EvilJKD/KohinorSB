var express = require('express');
var router = express.Router();
const passport = require('passport');

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
const crtlAdminTicket = require('../controllers/ticket');
const crtlFactura = require('../controllers/factura');
const crtlConfirmar = require('../controllers/confirmar');
const crtlDshboard = require('../controllers/dshboard');
const crtlcrearTicket = require('../controllers/crearTicket');
const crtlTicketUpdate = require('../controllers/ticketUpdate');
const crtLogOut = require('../controllers/logout');

/* GET home page. */
router.get('/', ctrlMain.index);
router.get('/about', crtAbout.about); //Invoca al controlador de about
router.get('/kohinor', crtKohinor.kohinor);
router.get('/funcion', crtlFuncion.funciones);
router.get('/contacto', crtlContacto.contacto);
router.get('/login', crtlLogin.login);
router.get('/registro', crtlRegistro.registro);
router.get('/overview', passport.authenticate('jwt', {session: false, failureRedirect: '/login'}), crtlOvrview.overview);
router.get('/ticket', passport.authenticate('jwt', {session: false, failureRedirect: '/login'}), crtlTicket.ticket);
router.get('/ticketAdmin', passport.authenticate('jwt', {session: false, failureRedirect: '/login'}), crtlAdminTicket.ticketAdmin);
router.get('/planes', passport.authenticate('jwt', {session: false, failureRedirect: '/login'}),crtlPlanes.funciones);
router.get('/carrito', passport.authenticate('jwt', {session: false, failureRedirect: '/login'}) ,crtlCarrito.carrito);
router.get('/it_usrs', passport.authenticate('jwt', {session: false, failureRedirect: '/login'}), crtlit_usrs.itUsrs);
router.get('/factura', passport.authenticate('jwt', {session: false, failureRedirect: '/login'}),crtlFactura.factura);
router.get('/confirmar', passport.authenticate('jwt', {session: false, failureRedirect: '/login'}) ,crtlConfirmar.confirmar);
router.get('/dshboard', passport.authenticate('jwt', {session: false, failureRedirect: '/login'}), crtlDshboard.dshboard);
router.get('/crearTicket', passport.authenticate('jwt', {session: false, failureRedirect: '/login'}), crtlcrearTicket.crearticket);
router.get('/logout', passport.authenticate('jwt', { session: false, failureRedirect: '/login' }), crtLogOut.logout);
//router.get('/ticketUpdate', crtlTicketUpdate.ticketUpdate);

/* POST Creación de Usuarios - Formulario. */
//router.post('/registro', crtlRegistro.doAddUsers);
/* POST Creación de ticket - Formulario. */
router.post('/crearTicket', passport.authenticate('jwt', {session: false, failureRedirect: '/login'}), crtlcrearTicket.doAddTicket);

router.get('/ticketUpdate/:ticketid', passport.authenticate('jwt', {session: false, failureRedirect: '/login'}), crtlTicketUpdate.ticketRead);
router.post('/ticketUpdate/:ticketid', passport.authenticate('jwt', {session: false, failureRedirect: '/login'}), crtlTicketUpdate.doUpdateTicket); 

//Seccion Ticket
router.route('/ticket/:ticketid')
    .get(passport.authenticate('jwt', {session: false, failureRedirect: '/login'}),crtlTicket.deleteTicket);


//Seccion modulos en Overview
router.route('/modulos')
    .get(passport.authenticate('jwt', {session: false, failureRedirect: '/login'}),crtlFuncion.getModulos)
router.route('/crearModulo')
    .get(passport.authenticate('jwt', {session: false, failureRedirect: '/login'}),crtlFuncion.renderCreateView)
    .post(passport.authenticate('jwt', {session: false, failureRedirect: '/login'}),crtlFuncion.createModulos)
router.route('/editarModulo/:moduloid')
    .get(passport.authenticate('jwt', {session: false, failureRedirect: '/login'}),crtlFuncion.getModuloAndDisplay)
    .post(passport.authenticate('jwt', {session: false, failureRedirect: '/login'}),crtlFuncion.updateModulo)
router.route('/modulos/:moduloid')
    .get(passport.authenticate('jwt', {session: false, failureRedirect: '/login'}),crtlFuncion.deleteModulo);


module.exports = router;