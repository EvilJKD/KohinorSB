const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('user');


const register = (req, res) => {
    if (!req.body.nombre || !req.body.apellido || !req.body.email || !req.body.contrasena) {
        return res
            .status(400)
            .json({"message": "All fields required"});
    }
    const user = new User();
    user.nombre = req.body.nombre
    user.apellido = req.body.apellido;
    user.email = req.body.email;
    user.setPassword(req.body.contrasena);

    console.log("Usuario de registro", user);
    user.save((err) => {
        if (err) {
            console.log(err);
            res
                .status(404)
                .json(err);
        } else {
            const token = user.generateJwt();
            res
                .status(200)
                .json({token});
        }
    });
};

const login = (req, res) => {
    if (!req.body.email || !req.body.password) {

        console.log("req body", req.body);
        return res
        .status(400)
        .json({"message": "All fields required"});
    }
    passport.authenticate('local', (err, user, info) => {
        let token;
        if (err) {
            return res
                .status(404)
                .json(err);
        }
        if (user) {
            console.log('User PP', user);
            token = user.generateJwt();
            res
                .status(200)
                .json({token});
        } else {
            console.log("Informacion", info);
            res
                .status(401)
                .json(info);
        }
    })(req, res);
};
module.exports = {
    register,
    login
};