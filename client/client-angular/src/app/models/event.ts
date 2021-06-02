import { Ticket } from "./ticket";

export interface Event 
{
    _id: String,
    name: String,
    category: String,
    artist: String,
    imgUrl: String,
    date: Date,
    location: String,
    tickets: Ticket[],
    minPrice: Number, 
    totalTickets: Number, 
    soldTickets: Number,
    soldOut: Boolean
}
