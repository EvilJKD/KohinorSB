/* GET ovrview. */
const it_usrs = (req, res) => {
    res.render('it_usrs',{
        title: 'it_usrs ',
        pageUser: [{
            user: 'User',
            plan: '5',
            new: '3',
            purchases: '23',
            balance: '$610'
        }],
        ticket_menu: [{
            Date: '2021/05/18',
            Topic: 'Error',
            Status: 'Pending'
        },{
            Date: '2021/04/28',
            Topic: 'Error',
            Status: 'Solved'
        }],
        usrCompany: [{
            Date: '2021/05/18',
            Company: 'La Holandesa',
            Status: 'active'
        },{
            Date: '2021/04/28',
            Company: 'Equipos Cotopaxi',
            Status: 'pending'
        }]
    });
};




module.exports = {
    it_usrs
};