/* GET ovrview. */
const overview = (req, res) => {
    res.render('overview',{
        title: 'overview ',
        pageUser: {
            user: 'User',
            plan: 'Starter'
        },
        ticket_menu: [{
            Date: '2021/05/18',
            Topic: 'Error',
            Status: 'Pending'
        },{
            Date: '2021/04/28',
            Topic: 'Error',
            Status: 'Solved'
        }]
    });
};




module.exports = {
    overview
};