//REST API router
const express = require('express');
const router = express.Router();
const ctrlUsers = require('../controllers/users');

//definir las rutas para las acciones sobre la coleccion users 

router
    .route('/users')
    .post(ctrlUsers.userCreate)
    .get(ctrlUsers.userList)
router
    .route('/users/:userid')
    .get(ctrlUsers.userRead)
    .put(ctrlUsers.userUpdate)
    .delete(ctrlUsers.userDelete);
 module.exports = router;