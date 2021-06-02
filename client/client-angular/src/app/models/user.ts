import { Ticket } from "./ticket";

export interface User 
{
    _id: string;
    email: string;
    password: string;
    userId: String;
    firstname: string;
    lastname: string;
    phoneNumber: string;
    code: String;
    QRcode: String;
    tickets: Ticket[];
}