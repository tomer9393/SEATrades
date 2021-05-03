export interface Ticket 
{
    _id: String,
    user: String,
    code: String,
    QRcode: String,
    event: String,
    section: String,
    row: String,
    seat: String,
    forTrade: Boolean,
    price: Number
}