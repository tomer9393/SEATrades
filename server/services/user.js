const User = require('../models/user');
const { ObjectId } = require('mongodb');
var QRCode = require('qrcode');
var crypto = require('crypto');

const generateCode = async (userId, email, password, phone) => {

    var prop = [userId,email,password,phone].toString();
    var code;
    try {
        code = await crypto.createHash("sha256").update(prop).digest("hex");
    } catch (err) {
        console.error(err)
    }

    return code;
};

const generateQR = async (code) => {

    var QR;
    try {
        QR = await QRCode.toString(code);
        console.log(QR)
    } catch (err) {
        console.error(err)
    }

    return QR;
};

const createUser = async (body) => {

    var userId = body.userId;
    var email = body.email;
    var password = body.password;
    var phone = body.phoneNumber;

    var code = await generateCode(userId, email, password, phone);
    var QRcode = await generateQR(code);


    const user = new User({
        email: body.email,
        password: body.password,
        userId: body.userId,
        firstName: body.firstName,
        lastName: body.lastName,
        phoneNumber: body.phoneNumber,
        code: code,
        QRcode: QRcode
    });

    await user.save();
    return user;
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
    //return await User.findById(id);
    try {
        let data = await User.findById(id);
        //console.log(`findById success--> ${data}`);
        if(!data) {
          throw new Error('no document found');
        }
        return data;
    } catch (error) {
        console.log(`getUserById findById error--> ${error}`);
        return error;
    }
};


const removeUserTicket = async (ticketId) => {

    return User.update({},{$pull:{"tickets":{$in:ticketId}}},{multi:true});
};


const getOnlyUserById = async (id) => {
    //return await User.findById(id,{'email':1, 'password':2, 'userId':3, 'firstName':4, 'lastName':5, 'phoneNumber':6, 'QRcode':7, 'code':8});
    try {
        let data = await User.findById(id,{'email':1, 'password':2, 'userId':3, 'firstName':4, 'lastName':5, 'phoneNumber':6, 'QRcode':7, 'code':8});
        //console.log(`findById success--> ${data}`);
        if(!data) {
          throw new Error('no document found');
        }
        return data;
    } catch (error) {
        console.log(`getOnlyUserById findById error--> ${error}`);
        return error;
    }
};


const updateUser = async (id, body) => {
    const user = await getUserById(id);
    if (!user){
        return null;
    }

    var userId = body.userId;
    var email = body.email;
    var password = body.password;
    var phone = body.phoneNumber;
    var firstName = body.firstName;
    var lastName = body.lastName;

    if(!userId){
        userId = user.userId;
    }
    if(!email){
        email = user.email;
    }
    if(!password){
        password = user.password;
    }
    if(!phone){
        phone = user.phoneNumber;
    }
    if(!firstName){
        firstName = user.firstName;
    }
    if(!lastName){
        lastName = user.lastName;
    }


    var code = await generateCode(userId, email, password, phone);
    var QRcode = await generateQR(code);

    user.email = email;
    user.userId = userId;
    user.firstName = firstName;
    user.lastName = lastName;
    user.phoneNumber = phone;
    user.code = code;
    user.QRcode = QRcode;

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