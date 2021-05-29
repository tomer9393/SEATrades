const ticketService = require('../services/ticket');
const eventService = require('../services/event');
const usersService = require('../services/user');
const tradeService = require('../services/trade');
const ticket = require('../models/ticket');

const createTrade = async (req, res) => {
    
    const user1 = req.body.user1; // the user that request to Trade
    const user2 = req.body.user2;    // the user that response to Trade
    const ticket1 = req.body.ticket1;    
    const ticket2 = req.body.ticket2;   

    if(req.body.trade_Status === 1){ // ( 1 - Trade , 0 -  rejected )

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

        const newTicket1 = await ticketService.updateTicketByTrade(ticket2, user1);
        const newTicket2 = await ticketService.updateTicketByTrade(ticket1,user2);


        const newTrade = await tradeService.createTrade(req.body);

        if(newTrade === null){
            return res.status(501).json("no created Trade");
        }

        return res.json(newTrade);
    }

    return res.status(501).json("The Trade rejected");
};

const getTicketsForTrade = async (req, res) => {
    const tickets = await tradeService.getTicketsForTrade( req.params.ticketId);
    if (!tickets) {
        return res.status(500).json("Tickets not found");
    }

    res.json(tickets);
};

const ticketForTrade = async (req, res) => {
    const ticket = await tradeService.ticketForTrade( req.params.ticketId);
    if (!ticket) {
        return res.status(500).json("Tickets not found");
    }

    res.json(ticket);
};

module.exports = {
    createTrade,
    getTicketsForTrade,
    ticketForTrade
}