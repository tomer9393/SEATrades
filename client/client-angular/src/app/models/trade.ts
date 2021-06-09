import { Ticket } from "./ticket";
import { User } from "./user";

export interface Trade 
{
    _id: String,
    user1: User,
    user2: User,
    ticket1: Ticket, 
    ticket2: Ticket,
    active: Boolean, 
    trade_Status: String,
}