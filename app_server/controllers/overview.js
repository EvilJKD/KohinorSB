/* GET ovrview. */
const overview = (req, res) => {
    res.render('overview',{title: 'overview '});
};

module.exports = {
    overview
};