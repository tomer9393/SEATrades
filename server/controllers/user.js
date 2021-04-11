const userService = require('../services/user');
const ticketService = require('../services/ticket');


const createUser = async (req, res) => {
    const newuser = await userService.createUser(req.body);
    res.json(newuser);
};


const getUsers = async (req, res) => {
    const users = await userService.getUsers();
    res.json(users);
};


const countUsers = async (req, res) => {
    const users = await userService.countUser();
    res.json(users);
};

const getUserByParam = async (req, res) => {

    var [email, firstName, lastName] = req.params.param.split('='); // get 3 parameters with split =

    const user = await userService.getUserByParam(email, firstName, lastName);
    console.log(email);
    console.log(firstName);
    console.log(lastName);

    res.json(user);
};



const getUserByEmail = async (req, res) => {
    const user = await userService.getUserByEmail(req.params.email);

    if (!user) {
        return res.status(404).json({errors: ['email not found']});
    }

    res.json(user);
};


const getUserById = async (req, res) => {
    const user = await userService.getUserById(req.params.id);

    if (!user){
        return res.status(404).json({errors: ['user_id not found']});
    }

    res.json(user);
};


const getOnlyUserById = async (req, res) => {
    const user = await userService.getOnlyUserById(req.params.id);

    if (!user){
        return res.status(404).json({errors: ['user_id not found']});
    }

    res.json(user);
};

const updateUser = async (req, res) => {
    if (!req.body) {
        res.status(400).json({
            message: "user param is required",
        });
    }

    const user = await userService.updateUser(req.params.id, req.body);
    if (!user) {
        return res.status(404).json({ errors: ['username not found'] });
    }

    res.json(user);
};


const updateTicketOfUser = async (req, res) => {

    if (!req.body) {
        res.status(400).json({
            message: "users param are required",
        });
    }

    const user = await userService.updateTicketOfUser(req.params.id);
    if (!user) {
        return res.status(404).json({ errors: ['user not found'] });
    }

    res.json(user);
};


const deleteUser = async (req, res) => {

    const tickets = await ticketService.getTicketsByUserId(req.params.id);

    tickets.forEach(function (ticketId) {
        const ticket = ticketService.deleteTicket(ticketId["_id"]);
        if (!ticket){
            return res.status(404).json({ errors: ['ticket not found for deleted'] });
        }

    });

    const user = await userService.deleteUser(req.params.id);
    if (!user) {
        return res.status(404).json({ errors: ['user not found'] });
    }

    res.send();
};


module.exports = {
    createUser,
    getUsers,
    getUserById,
    updateUser,
    updateTicketOfUser,
    deleteUser,
    countUsers,
    getUserByParam,
    getUserByEmail,
    getOnlyUserById
}