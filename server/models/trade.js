const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Trade = new Schema({
    user1: {                                     //request_User
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    user2: {                                    //response_User
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    ticket1:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Ticket"
    },
    ticket2:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Ticket"
    },
    trade_Status: {                            // ( 1 - trade , 0 -  rejected )
        type: Boolean  
    }
});


module.exports = mongoose.model('Trade', Trade);