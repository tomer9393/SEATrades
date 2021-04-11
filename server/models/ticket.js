const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Ticket = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    code: {
        type: String
    },
    QRcode: {
        type: String
    },
    event:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Event"
    },
    section: {
        type: String
    },
    row: {
        type: String  
    },
    seat: {
        type: String  
    },
    forTrade: {
        type: Boolean  
    }
});

module.exports = mongoose.model('Ticket', Ticket);