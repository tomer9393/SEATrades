const User = require('../models/user');

const createUser = async (body) => {
    const user = new User({
        email: body.email,
        password: body.password,
        userId: body.userId,
        firstName: body.firstName,
        lastName: body.lastName,
        phoneNumber: body.phoneNumber
    });

    return await user.save();
};


const getUsers = async () => {
    return await User.find({},{'_id':1, 'email':2, 'password':3, 'userId':4, 'firstName':5, 'lastName':6, 'phoneNumber':7});
};


const countUser = async () => {
    return await User.countDocuments({});
};


const getUserByParam = async (email, firstName, lastName) => {

    return User.find(
        {
     
            'email': {$regex: `.*${email}.*`, $options:'i'},
            'firstName': {$regex: `.*${firstName}.*`, $options:'i'},
            'lastName': {$regex: `.*${lastName}.*`, $options:'i'}
        }
    );
};



const getUserByEmail = async (email) => {
    return await User.find({'email': email});
};


const getUserById = async (id) => {
    return await User.findById(id);
};


const removeUserTicket = async (ticketId) => {

    return User.update({},{$pull:{"tickets":{$in:ticketId}}},{multi:true});
};


const getOnlyUserById = async (id) => {
    return await User.findById(id,{'email':1, 'password':2, 'userId':3, 'firstName':4, 'lastName':5, 'phoneNumber':6});
};


const updateUser = async (id, body) => {
    const user = await getUserById(id);
    if (!user)
        return null;

    user.email = body.email;
    user.password =  body.password;
    user.userId = body.userId;
    user.firstName = body.firstName;
    user.lastName = body.lastName;
    user.phoneNumber = body.phoneNumber;

    await user.save();
    return user;

};


const updateTicketOfUser = async (id, ticket) => {

    const user = await getUserById(id);

    if (!user)
        return null;

    if(!ticket)
        return null

    if(user.tickets.indexOf(ticket._id) === -1){
        user.tickets.push(ticket._id);
    }
    await user.save();

    return user;
};


const deleteUser = async (id) => {
    const user = await getUserById(id);
    if (!user)
        return null;

    await user.remove();
    return user;
};


module.exports = {
    createUser,
    getUsers,
    countUser,
    getUserByParam,
    getUserByEmail,
    getUserById,
    removeUserTicket,
    getOnlyUserById,
    updateUser,
    updateTicketOfUser,
    deleteUser
}