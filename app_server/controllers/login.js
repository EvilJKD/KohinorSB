/* GET login. */
const login = (req, res) => {
    res.render('login',{title: 'login '});
};

module.exports = {
    login
};