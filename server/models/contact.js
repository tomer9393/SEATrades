const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Contact = new Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    message: {
        type: String
    },
    published: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('Contact', Contact);