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

/* GET home page. */
router.get('/', ctrlMain.index);
router.get('/about', crtAbout.about); //Invoca al controlador de about
router.get('/kohinor', crtKohinor.kohinor);
router.get('/funcion', crtlFuncion.funcion);
router.get('/contacto', crtlContacto.contacto);
router.get('/login', crtlLogin.login);
router.get('/registro', crtlRegistro.registro);
router.get('/overview', crtlOvrview.overview);
router.get('/ticket', crtlTicket.ticket);

module.exports = router;
