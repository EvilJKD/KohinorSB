const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const User = mongoose.model('user');
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

passport.use(new LocalStrategy({
   usernameField: 'email'
},(username, password, done) => {
    User.findOne({email: username}, (err, user) => {
        console.log('Password', password);
        console.log('USER PP', user);
        if(err){return done(err);}
        if(!user){
            return done(null, false, {
                message: 'Incorrect username'
            });
        }
        if(!user.validPassword(password)){
            console.log("Salt", this.salt);
            console.log("Contrasena incorrecta en Passport");
            return done(null, false, {
                message: 'Clave Incorrecta.'
            });
        }
        return done(null, user);
    });
}
));
const cookieExtractor = (req) => {
    let token = null;
    if (req && req.cookies) {
        token = req.cookies['db_kohinor-token'];
    }
    return token;
};


//Estrategia de JWT para verificar que el token que estamos enviando es correcto
passport.use(new JWTStrategy({
    secretOrKey: process.env.JWT_SECRET,
    jwtFromRequest: ExtractJWT.fromExtractors([cookieExtractor])
}, async(user, done) => {
    try {
        console.log(user);
        return done(null, user);
    } catch (error) {
        console.log(error);
        done(error);
    }
}));