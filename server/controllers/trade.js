const ticketService = require('../services/ticket');
const eventService = require('../services/event');
const usersService = require('../services/user');
const tradeService = require('../services/trade');
const ticket = require('../models/ticket');

const createTrade = async (req, res) => {
    
    const user1 = req.body.user1; // the user that request to Trade
    const user2 = req.body.user2;    // the user that response to Trade
    const ticket1 = await ticketService.getTicketById(req.body.ticket1);    
    const ticket2 = await ticketService.getTicketById(req.body.ticket2);   

    if( ticket1.forTrade === true && ticket2.forTrade === true){

        const newTrade = await tradeService.createTrade(req.body);

        if (!newTrade) {
            return res.status(501).json("No Trade created");
        }
        
        res.json(newTrade);

    }else{

        res.json("The tickets not intended for trades");
    }

};

const getTradeById = async (req, res) => {
  
    console.log(`req with TradeId: ${req.params.id} `);
    if (!req.params.id || !req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
      res.status(400).json("Valid id is required");
    }
    
    const trade = await tradeService.getTradeById(req.params.id);
    if (!trade) {
      return res.status(404).json("Trade not found");
    }
  
    res.json(trade);
};

const acceptTrade = async (req, res) => {

    console.log(`req - acceptTrade with TradeId: ${req.params.id} `);
    if (!req.params.id || !req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
      res.status(400).json("Valid id is required");
    }
    
    // update the trade in DB : active = false , status = accept
    const trade = await tradeService.acceptTrade(req.params.id);

    const user1 = trade.user1; // the user that request to Trade
    const user2 = trade.user2;    // the user that response to Trade
    const ticket1 = trade.ticket1;    
    const ticket2 = trade.ticket2;


    if(trade.trade_Status === 'Accept')
    {

        // remove the originals tickets from users

        try {
            
            const remove_ticket1_user1 = await usersService.removeUserTicket(ticket1);
            if (remove_ticket1_user1.nModified === 0) {
                throw new Error('cant find ticket on user1 table to update');
            }
    
            const remove_ticket2_user2 = await usersService.removeUserTicket(ticket2);
            if (remove_ticket2_user2.nModified === 0) {
                throw new Error('cant find ticket on user1 table to update');
            }

        } catch (error) {
            console.log(`error in remove the originals tickets from users --> ${error}`);
            return res.json(error);
        }

        // update ticket - update the user, code, codeQR, and ticketsUser

        try {
            
            const newTicket1 = await ticketService.updateTicketByTrade(ticket2, user1);
            const newTicket2 = await ticketService.updateTicketByTrade(ticket1,user2);

            var array = [trade,newTicket1,newTicket2];
            return res.json(array);

        } catch (error) {
            console.log(`error in update the new tickets --> ${error}`);
            return res.json(error);
        }


    }

    return res.status(501).json("The Trade rejected");
};

const rejectTrade = async (req, res) => {
  
    console.log(`req - rejectTrade with TradeId: ${req.params.id} `);
    if (!req.params.id || !req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
      res.status(400).json("Valid id is required");
    }
    
    const trade = await tradeService.rejectTrade(req.params.id);
    if (!trade) {
      return res.status(404).json("Trade not found");
    }
  
    res.json(trade);
};

const getTrades = async (req, res) => {
    const trades = await tradeService.getTrades();
    if (!trades) {
      return res.status(500).json("Trades not found");
    }
    res.json(trades);
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

const MyAlertsTrades = async (req, res) => {
    const trades = await tradeService.MyAlertsTrades(req.params.userId);
    if (!trades) {
        return res.status(500).json("Trades not found");
    }

    res.json(trades);
};


const MyRequestsTrades = async (req, res) => {
    const trades = await tradeService.MyRequestsTrades(req.params.userId);
    if (!trades) {
        return res.status(500).json("Trades not found");
    }

    res.json(trades);
};


module.exports = {
    createTrade,
    getTradeById,
    acceptTrade,
    rejectTrade,
    getTrades,
    getTicketsForTrade,
    ticketForTrade,
    MyAlertsTrades,
    MyRequestsTrades
}