const factura = (req, res) => {
    res.render('factura',{
        title: 'Factura',
        countries: ['Ecuador','Colombia','Peru','Chile','Venezuela'],
        states: ['Pichincha','Imbabura','Guayas','Manabi','Esmeraldas']
    });
}

module.exports = {
    factura
};