/* GET funcionalidades. */
const funcion = (req, res) => {
    res.render('funcion',{
        title: 'Funcion',
        functions: [{
            imgURL: 'images/dummy.jpg',
            name: 'Inventarios',
            description: "Clasificación de los bienes o artículos en almacenes o bodegas. Manejo y control de stocks, varios precios, costos, códigos principales, códigos alternos y registro de características físicas de artículos, control de transferencias entre bodegas."
        },{
            imgURL: 'images/dummy.jpg',
            name: "Compras",
            description: "Registra las Empresas Proveedoras de Productos, registra la compra de bienes o servicios, ingreso de mercadería, prestamos de mercadería, consignación de mercadería, control de caja chica."
        },{
            imgURL: 'images/dummy.jpg',
            name: "Ventas",
            description: "Manejo integral de la información relacionada con el proceso de ventas de la Empresa generando un estado de cuenta. Emitie una factura de un servicio o realizar un egreso de un bien."
        },{
            imgURL: 'images/dummy.jpg',
            name: "Importaciones",
            description: "Registra el pedido del exterior, gastos de cada pedido, la liquidación de la importación y la actualización de los precios de venta y costos de los artículos importados."
        },{
            imgURL: 'images/dummy.jpg',
            name: "Nomina",
            description: "Liquidación del Rol de una o varias oficinas, rubros de rol creados en función de fórmulas de fácil implementación y uso. control de Transacciones manuales, Notas de debito de empleados, control de vacaciones, calculo automático del rol normal, rol de provisiones, cotrol de días feriados, hitorial de cambio de oficina, cambio de sueldo."
        },{
            imgURL: 'images/dummy.jpg',
            name: "Contabilidad y Finanzas",
            description: "Control de Transacciones Contables de manera automatizada. Contabilizacion de comprobantes y la generación de Estados Financieros en línea."
        },{
            imgURL: 'images/dummy.jpg',
            name: "Facturación Electrónica",
            description: "Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec mattis, pulvinar dapibus leo."
        },{
            imgURL: 'images/dummy.jpg',
            name: "Producción",
            description: "Manejo integral de la producción de bienes de una Empresa Industrial. Control de materias primas, costos de mano de obra, control de tiempos de producción, registro de módulos y secciones de producción, subproductos, control de insumos, fórmulas de producción, tiempos estándar, presupuestos, balanceo de línea."
        },{
            imgURL: 'images/dummy.jpg',
            name: "Puntos de Venta",
            description: "Manejo de la información generada en el sitio físico de venta directa a los Clientes. Facilita el cobro inmediato en efectivo, cheque, tarjeta de crédito."
        },{
            imgURL: 'images/dummy.jpg',
            name: "Activos Fijos",
            description: "Control y asignación de cada uno de los Activos a los funcionarios o empleados de la Empresa. cálculo automático de depreciación del bien en función del tiempo y valor del Bien, reasignación de activos fijos, manejo de cambio o revalorización del activo fijo, manejo de historial de inventario físico."
        }
    ]
    });
};

module.exports = {
    funcion
};