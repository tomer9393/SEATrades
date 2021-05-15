const ticketService = require('../services/ticket');
const eventService = require('../services/event');
const usersService = require('../services/user');
const swapService = require('../services/swap');
const ticket = require('../models/ticket');

const createSwap = async (req, res) => {
    
    const user1 = req.body.user1; // the user that request to swap
    const user2 = req.body.user2;    // the user that response to swap
    const ticket1 = req.body.ticket1;    
    const ticket2 = req.body.ticket2;   

    if(req.body.swap_Status === 1){ // ( 1 - swapped , 0 -  rejected )

        // remove the originals tickets from users

        const remove_ticket1_user1 = await usersService.removeUserTicket(ticket1);
        if (remove_ticket1_user1.nModified === 0) {
            return res.status(404).json('cant find ticket on user1 table to update');
        }

        const remove_ticket2_user2 = await usersService.removeUserTicket(ticket2);
        if (remove_ticket2_user2.nModified === 0) {
            return res.status(404).json('cant find ticket on user1 table to update');
        }

        
        // update ticket - update the user, code, codeQR, and ticketsUser

        const newTicket1 = await ticketService.updateTicketBySwap(ticket2, user1);
        const newTicket2 = await ticketService.updateTicketBySwap(ticket1,user2);


        const newSwap = await swapService.createSwap(req.body);

        if(newSwap === null){
            return res.status(501).json("no created swap");
        }

        return res.json(newSwap);
    }

    return res.status(501).json("The swap rejected");
};

const getTicketsForSwap = async (req, res) => {
    const tickets = await swapService.getTicketsForSwap( req.params.ticketId);
    if (!tickets) {
        return res.status(500).json("Tickets not found");
    }

    res.json(tickets);
};

const ticketForSwap = async (req, res) => {
    const ticket = await swapService.ticketForSwap( req.params.ticketId);
    if (!ticket) {
        return res.status(500).json("Tickets not found");
    }

    res.json(ticket);
};

module.exports = {
    createSwap,
    getTicketsForSwap,
    ticketForSwap
}