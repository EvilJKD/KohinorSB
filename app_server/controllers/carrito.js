/* GET carrito page. */
const carrito = (req, res) => {
    res.render('carrito',{
        title: 'carrito',
        usuario: '2',
        carrito: [{
            producto: 'Venta',
            cantidad: '1',
            precio: 'US$ 5.00'
        },{
            producto: 'Nomina',
            cantidad: '1',
            precio: 'US$ 5.00' 
        },{
            producto: 'Compras',
            cantidad: '1',
            precio: 'US$ 5.00'  
        }]
    });
};

module.exports = {
    carrito
};