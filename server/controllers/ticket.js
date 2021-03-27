const ticketService = require('../services/ticket');
const eventService = require('../services/event');
const usersService = require('../services/user');
const ticket = require('../models/ticket');

const createTicket = async (req, res) => {
    const newTicket = await ticketService.createTicket(req.body);
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

    const user = await usersService.removeUserTicket([ticketId]);

    if (user.nModified === 0) {
        return res.status(404).json('cant find ticket on user table to update');
    }

    const ticket = await ticketService.deleteTicket(ticketId);
    if (!ticket) {
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