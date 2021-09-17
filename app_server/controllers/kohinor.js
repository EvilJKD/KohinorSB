/* GET about page. */
const kohinor = (req, res) => {
    res.render('kohinor',{title: 'Kohinor'});
};

module.exports = {
    kohinor
};