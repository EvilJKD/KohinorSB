const logout = (req, res) => {
    console.log('Log Out');
    res.clearCookie('db_kohinor-token', { path: '/' });
    res.redirect('/login');
}

module.exports = {
    logout
}