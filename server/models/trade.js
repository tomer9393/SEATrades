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
    active: {                            // ( 1 - active , 0 -  inactive )
        type: Boolean,
        default: true    
    },
    trade_Status: {                            // ( 1 - accept , 2 -  waiting , 3 - rejected )
        type: String,
        enum: ['Accept', 'Waiting', 'Rejected'],
        default: "Waiting"  
    }
});


module.exports = mongoose.model('Trade', Trade);