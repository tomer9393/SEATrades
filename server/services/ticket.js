const eventService = require('../services/event');
const serviceUser = require('../services/user');
const Ticket = require('../models/ticket');


const createTicket = async (body) => {
    const ticket = new Ticket({
        user : body.user,
        code : body.code,
        QRcode: body.QRcode,
        event : body.event,
        section : body.section,
        row : body.row,
        seat : body.seat,
        forTrade : body.forTrade
    });

    await eventService.updateTicketOfEvent(body.event, ticket);
    await serviceUser.updateTicketOfUser(body.user, ticket);


    return await ticket.save();
};

const getTicketById = async (id) => {
    return await Ticket.findById(id);
};

const getTickets = async () => {
    return await Ticket.find({});
};


const getTicketsByEventId = async (id) => {
    return await Ticket.find({'event' : [id]});
};

const getTicketsByUserId = async (userId) => {
    return await Ticket.find({'user': Object(userId)});
};

const updateTicket = async (id, body) => {
    const ticket = await getTicketById(id);
    if (!ticket)
        return null;

    ticket.user = body.user;
    ticket.code = body.code;
    ticket.QRcode = body.QRcode;
    ticket.event = body.event;
    ticket.section = body.section;
    ticket.row = body.row;
    ticket.seat = body.seat;
    ticket.forTrade = body.forTrade;

    // await eventService.updateTicketOfEvent(body.event, ticket);
    // await serviceUser.removeUserTicket(ticket); //?????
    // await serviceUser.updateTicketOfUser(body.user, ticket);
    
    await ticket.save();
    return ticket;
};

const deleteTicket = async (id) => {
    const ticket = await getTicketById(id);
    if (!ticket)
        return null;

    await ticket.remove();
    return ticket;
};



const getNumOfTickets = async () => {
    return await Ticket.countDocuments();
};



module.exports = {
    createTicket,
    getTicketById,
    getTickets,
    getTicketsByEventId,
    getTicketsByUserId,
    updateTicket,
    deleteTicket,
    getNumOfTickets
}