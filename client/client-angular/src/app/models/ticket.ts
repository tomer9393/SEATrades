const mongoose = require('mongoose');


export interface Ticket 
{
    //user: mongoose.Schema.Types.ObjectId,
    code: String, 
    QRcode: String,
    //event: moongose.Schema.Types.ObjectId,
    section: String,
    row: String,
    seat: String,
    forTrade: Boolean, 
}
