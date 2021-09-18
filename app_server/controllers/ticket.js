/* GET ovrview. */
const ticket = (req, res) => {
    res.render('ticket',{
        title: 'ticket ',
        ticketWin: [{
            Date: '2021/05/18',
            Name: 'Juan',
            Topic: 'Error',
            Descripcion: 'Modulo impresion',
            Responsable: 'unassigned',
            Status: 'Pending'
        },{
            Date: '2021/04/28',
            Name: 'Roberto',
            Topic: 'Error',
            Descripcion: 'Facturación',
            Responsable: 'Ing. Diaz',
            Status: 'Solved'
        }]
    });
};

module.exports = {
    ticket
};