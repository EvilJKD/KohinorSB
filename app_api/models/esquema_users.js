const mongoose = require('mongoose');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

//Schema Usuarios
const usuariosSchema =  new mongoose.Schema({
    nombre: {
        type: String,
        required:true
    },
    apellido: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required:true
    },
    hash:String,
    salt:String

});

usuariosSchema.methods.setPassword = (password) => {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
};

usuariosSchema.methods.validPassword = (password) => {
    const hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
    return this.hash === hash;
}

usuariosSchema.methods.generateJwt = () => {
    const expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);
    return jwt.sign({
        _id:this._id,
        nombre: this.nombre,
        apellido: this.apellido,
        email: this.email,
        exp: parseInt(expiry.getTime()/1000, 10),
    }, process.env.JWT_SECRET);
};

const Usuario = new mongoose.model('user',usuariosSchema); //copliar el esquema en un modelo

 /* const user = new Usuario();
    user.nombre= 'Ash',
    user.apellido= 'Ketchum',
    user.email= 'poketrainer01@hotmail.com',
    user.setPassword("pikachu4life"); */
 
//user.save();
module.exports = Usuario;