const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Event = new Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String
    },
    artist: {
        type: String
    },
    imgUrl:{
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    location: {
        type: String  
    },
    minPrice: {
        type: Number  
    },
    totalTickets: {
        type: Number  
    },
    soldTickets: {
        type: Number  
    },
    soldOut: {
        type: Boolean
    },
    tickets: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Ticket"
        }
    ]  
});

module.exports = mongoose.model('Event', Event);