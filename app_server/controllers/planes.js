/* GET planes page. */
const planes = (req, res) => {
    res.render('planes',{
        title: 'Planes',
        planes: [{
            name: 'STARTER',
            description: 'Incluye módulos de CONTABILIDAD, FACTURACIÓN ELECTRÓNICA, COMPRAS, VENTAS, PUNTOS DE VENTA. \n Módulos enfocados en Versiones PYME, COMERCIAL, TRIBUTARIO.'
        },{
            name:'PRO',
            description: 'Incluye módulos del paquete STARTER más INVENTARIO E IMPORTACIONES.\nMódulos enfocados en Versiones IMPORTADORA, ADMINISTRATIVA.'
        },{
            name:'ENTERPRISE',
            description: 'Incluye módulos del paquete PRO más NÓMINA, ACTIVOS FIJOS Y PRODUCCIÓN.\nMódulos enfocados en Versiones INDUSTRIAL, FINANCIERA.'
        }]
    });
};

module.exports = {
    planes
};