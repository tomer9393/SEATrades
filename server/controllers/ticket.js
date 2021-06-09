const ticketService = require('../services/ticket');
const eventService = require('../services/event');
const usersService = require('../services/user');
const ticket = require('../models/ticket');

const createTicket = async (req, res) => {
    const newTicket = await ticketService.createTicket(req.body);
    
    if(newTicket === null){
        return res.status(501).json("Sold out");
    }

    if (!newTicket) {
        return res.status(501).json("No ticket created");
    }
    res.json(newTicket);
};


const getTicketById = async (req, res) => {

    console.log(`req with TicketId: ${req.params.id} `);
    if (!req.params.id || !req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
        res.status(400).json("Valid id is required");
    }
    const ticket = await ticketService.getTicketById(req.params.id);
    if (!ticket) {
        return res.status(404).json("Ticket not found");
    }

    res.json(ticket);
};

const getTicketByTicketId = async (req, res) => {
    const tickets = await ticketService.getTicketByTicketId(req.params.ticketId);
    if (!tickets) {
        return res.status(500).json("Tickets not found");
    }
    res.json(tickets);
};

const getTickets = async (req, res) => {
    const tickets = await ticketService.getTickets();
    if (!tickets) {
        return res.status(500).json("Tickets not found");
    }
    res.json(tickets);
};


const getTicketsByEventId = async (req, res) => {
    const tickets = await ticketService.getTicketsByEventId(req.params.eventId)

    if (!tickets) {
        return res.status(500).json("Tickets not found");
    }

    res.json(tickets);
};

const getTicketsByEvent = async (req, res) => {
    const tickets = await ticketService.getTicketsByEvent(req.params.eventId)

    if (!tickets) {
        return res.status(500).json("Tickets not found");
    }

    res.json(tickets);
};

const getTicketsByUserId = async (req, res) => {
    const tickets = await ticketService.getTicketsByUserId(req.params.userId);
    if (!tickets) {
        return res.status(500).json("Tickets not found");
    }

    res.json(tickets);
};


const updateTicket = async (req, res) => {

    if (!req.body) {
        res.status(400).json({
            message: "ticket param are required",
        });
    }

    const ticket = await ticketService.updateTicket(req.params.id, req.body);
    if (!ticket) {
        return res.status(500).json("Ticket not found");
    }

    res.json(ticket);
};

const deleteTicket = async (req, res) => {

    const ticketId = req.params.id;

    if (!req.params.id || !req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
        res.status(400).json("Valid id is required");
    }
    const ticket = await ticketService.getTicketById(req.params.id);
    if (!ticket) {
        return res.status(404).json("Ticket not found");
    }

    const event = await eventService.removeEventTicket(ticket,ticketId);
    if (event.nModified === 0) {
        return res.status(404).json('cant find ticket on user table to update');
    }
    const user = await usersService.removeUserTicket([ticketId]);
    console.log(user);

    if (user.nModified === 0) {
        return res.status(404).json('cant find ticket on user table to update');
    }

    const ticket1 = await ticketService.deleteTicket(ticketId);
    if (!ticket1) {
        return res.status(404).json('ticket not found');
    }

    res.send();
};


const getNumOfTickets = async (req, res) => {
    const count = await ticketService.getNumOfTickets();
    if (!count) {
        return res.send(0);
    }
    res.json(count);
};

const boolTicket = async (req, res) => {

    const eventId = req.params.eventId;
    const section = req.params.section;
    const row = req.params.row;
    const seat = req.params.seat;

    const boolTicket = await ticketService.boolTicket(eventId, section, row, seat);
    
    return res.send(boolTicket);
};

const getMApOfEvent = async (req, res) => {

    const eventId = req.params.eventId;
    const row = req.params.row;

    const map = await ticketService.getMApOfEvent(eventId, row);
    
    return res.send(map);
};

module.exports = {
    createTicket,
    getTicketById,
    getTicketByTicketId,
    getTickets,
    getTicketsByEventId,
    getTicketsByEvent,
    getTicketsByUserId,
    updateTicket,
    deleteTicket,
    getNumOfTickets,
    boolTicket,
    getMApOfEvent
}