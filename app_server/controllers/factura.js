const factura = (req, res) => {
    res.render('factura',{
        title: 'Factura',
        countries: ['Ecuador','Colombia','Peru','Chile','Venezuela'],
        states: ['Pichincha','Imbabura','Guayas','Manabi','Esmeraldas'],
        usuario: req.user._id
    });
}

module.exports = {
    factura
};