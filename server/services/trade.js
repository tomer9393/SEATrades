const eventService = require('./event');
const ticketService = require('./ticket');
const serviceUser = require('./user');
const Ticket = require('../models/ticket');
const Trade = require('../models/trade');
const { events } = require('../models/ticket');
const { json } = require('body-parser');
const { request } = require('http');
const { ObjectId } = require('mongodb');
const { Object } = require('mongodb');
const { flatMap } = require('lodash');
const { exists } = require('fs');
const { cond } = require('lodash');

const createTrade = async (body) => {
    
    const trade = new Trade({
        user1 : body.user1,
        user2 : body.user2,
        ticket1 : body.ticket1,
        ticket2 : body.ticket2,
    });


    try {
        return await trade.save();
    } catch (error) {
        return null;
    }
};

const getTradeById = async (id) => {

    try {
        let trade = await Trade.findById(id);
        if(!trade) {
          throw new Error('no document found');
        }
        return trade;
    } catch (error) {
        console.log(`findById error--> ${error}`);
        return error;
    }
};

const acceptTrade = async (id) => { ///////kannnnn state = true

    try {
        let trade = await Trade.findById(id);
        if(!trade) {
          throw new Error('no document found');
        }

        trade.active = false;
        trade.trade_Status = 'Accept';
    
        await trade.save();


        // delete trades requests that ticket1 send to other if exist
        var exist = await existTradeByTicket1Id(trade.ticket2); 
        if(exist){ 
            
            const req_trades = await Trade.find({ trade_Status: 'Waiting', ticket1: trade.ticket2 });

            for (let i = 0; i < req_trades.length; i++) {
                console.log(req_trades.length);
                await deleteTrade(req_trades[i]._id);
            }
        }


        // reject all other requests trade with this ticket 
        var ticket = await ticketService.getTicketById(trade.ticket1);
        if(!ticket){
            throw new Error('no document found');
        }

        let x = await AcceptTradeExceptFrom( trade.user2, ticket.event, id);
        if(!x){
            throw new Error('no reject all other requests trade with this ticket');
        }

        return trade;

    } catch (error) {
        console.log(`acceptTrade--> ${error}`);
        return error;
    }

};

const AcceptTradeExceptFrom = async (user2Id, eventId, acceptTrade) => {

    var query = 
        [{
            $match: {
                $and: [
                    { active: { $eq: true } },
                    { user2: { $eq: ObjectId(user2Id) } }
                ]
            }
        }, {
            $lookup: {
                from: 'tickets',
                localField: 'ticket1',
                foreignField: '_id',
                as: 'ticket1'
            }
        }, {
            $unwind: {
                path: '$ticket1'
            }
        }, {
            $match: {
                'ticket1.event': { $eq: ObjectId(eventId) }
            }
        }, {
            $match: {
                $nor: [
                    { _id: ObjectId(acceptTrade) }
                ]
            }
    }]; 
    
    try {
        
        let rejectTrades = await Trade.aggregate(query);

        if(!rejectTrades) {
          throw new Error('no document found');
        }

        for (let i = 0; i < rejectTrades.length; i++) {
            console.log(rejectTrades.length);
            await rejectTrade(rejectTrades[i]);
        }

        return true;

    } catch (error) {
        console.log(`rejectTrades error--> ${error}`);
        return error;
    }

};


const rejectTrade = async (id) => {

    try {
        let trade = await Trade.findById(id);
        if(!trade) {
          throw new Error('no document found');
        }

        trade.active = false;
        trade.trade_Status = 'Rejected';
    
        await trade.save();
        return trade;

    } catch (error) {
        console.log(`findById error--> ${error}`);
        return error;
    }

};

const getTrades = async () => {
    return await Trade.aggregate([{
        $lookup: {
            from: 'users',
            localField: 'user1',
            foreignField: '_id',
            as: 'user1'
        }
    }, {
        $unwind: {
            path: '$user1'
        }
    }, {
        $lookup: {
            from: 'users',
            localField: 'user2',
            foreignField: '_id',
            as: 'user2'
        }
    }, {
        $unwind: {
            path: '$user2'
        }
    }, {
        $project: {
            "active": 1,
            "trade_Status": 2,
            "user1": '$user1.email',
            "ticket1": 3,
            "user2": '$user2.email',
            "ticket2": 4
    
        }
    }]);
};

const getTicketsForTrade = async ( ticketId ) => {

    var ticket = await ticketService.getTicketById(ticketId);
    if(!ticket){
        return null;
    }

    var event = await eventService.getEventById(ticket.event);
    if(!event){
        return null;
    }

    var query = [
    {
        $match: 
        {
            "forTrade": true
        }
    },
        
    {
        $lookup: {
            from: "events",
            localField: "event",
            foreignField: "_id",
            as: "event"
        }
    }, 
    {
        $unwind: {
            path: "$event"
        }
    }, 
    {
        $project: {
            "_id": 1,
            "event._id": 1,
            "event.name": 2,
            "event.location": 3,
            "event.date": 4,
            "section": 5,
            "row": 6,
            "seat": 7,
            "user":8,
            "forTrade":9
        }
    },
    {
        $match: 
        {
            "event.name": event.name
        }
    },
    {
        $match: 
        {
            $nor:
            [
                { user: ObjectId(ticket.user) }
            ]
        }
    }
]; 

    return await Ticket.aggregate(query);
};

const ticketForTrade = async (ticketId) => {

    var ticket = await ticketService.getTicketById(ticketId);
    if (!ticket){
        return null;
    }

    if(!ticket.forTrade)
    {
        ticket.forTrade = true;

    }else{ //click on untrade
        ticket.forTrade = false;
        

        var exist = await existTradeByTicket1Id(ticketId); ////////kannnnnn state=true
        if(exist){ 
            // delete trades requests that ticket1 send to other
            const req_trades = await Trade.find({ trade_Status: 'Waiting', ticket1: ticketId });

            for (let i = 0; i < req_trades.length; i++) {
                console.log(req_trades.length);
                await deleteTrade(req_trades[i]._id);
            }
        }
        // reject trades that waiting for this ticket
        let res_trades =  await Trade.find({ trade_Status: 'Waiting', ticket2: ticketId });
        if(res_trades[0]){
            for (let i = 0; i < res_trades.length; i++) {
                console.log(res_trades.length);
                await rejectTrade(res_trades[i]._id);
            }
        }
    }

    await ticket.save();


    return ticket;
};

const existTradeByTicket1Id = async (ticketId) => {

    const trade = await Trade.find({ trade_Status: 'Waiting', ticket1: ticketId });
    if(trade[0]){
        return true;
    }

    return false;

};

const deleteTrade = async (id) => {

    try {
        let trade = await Trade.findById(id);
        //console.log(`findById success--> ${trade}`);
        if(!trade) {
          throw new Error('no document found');
        }

        await trade.remove();

        return trade;

    } catch (error) {
        console.log(`findById error--> ${error}`);
        return error;
    }
};

const MyAlertsTrades = async (userId) => {

    var query = [
    {
        $match: {
            $and: 
            [
                { active: { $eq: true } },
                { user2: { $eq: ObjectId(userId) } }
            ]
    
        }
    }, 
    {
        $lookup: {
            from: 'users',
            localField: 'user1',
            foreignField: '_id',
            as: 'user1'
        }
    }, 
    {
        $unwind: {
            path: '$user1'
        }
    }, 
    {
        $lookup: {
            from: 'tickets',
            localField: 'ticket1',
            foreignField: '_id',
            as: 'ticket1'
        }
    }, 
    {
        $unwind: {
            path: '$ticket1'
        }
    }, 
    {
        $lookup: {
            from: 'tickets',
            localField: 'ticket2',
            foreignField: '_id',
            as: 'ticket2'
        }
    }, 
    {
        $unwind: {
            path: '$ticket2'
        }
    }, 
    {
        $lookup: {
            from: 'events',
            localField: 'ticket1.event',
            foreignField: '_id',
            as: 'ticket1.event'
        }
    }, 
    {
        $unwind: {
            path: '$ticket1.event'
        }
    }, 
    {
        $lookup: {
            from: 'events',
            localField: 'ticket2.event',
            foreignField: '_id',
            as: 'ticket2.event'
        }
    }, 
    {
        $unwind: {
            path: '$ticket2.event'
        }
    }, 
    {
        $project: {
            "user1.email": 1 ,
            "ticket1.event.name": 2,
            "ticket1.event.location": 2,
            "ticket1.event.date": 2,
            "ticket1.section": 3,
            "ticket1.row": 4,
            "ticket1.seat": 5,
            "ticket2._id": 6,
            "ticket2.event.name": 6,
            "ticket2.event.location": 6,
            "ticket2.event.date": 6,
            "ticket2.section": 7,
            "ticket2.row": 8,
            "ticket2.seat": 9
        }
    }, 
    {
        $project: {
            "MyTicket": '$ticket2',
            "TradeWith": '$user1.email',
            "TradeTicket": '$ticket1'
    
        }
    }]; 

    return await Trade.aggregate(query);
};


const MyRequestsTrades = async (userId) => {

    var query = [
    {
        $match: {
            user1: { $eq: ObjectId(userId) }
        }
    }, {
        $lookup: {
            from: 'users',
            localField: 'user2',
            foreignField: '_id',
            as: 'user2'
        }
    }, {
        $unwind: {
            path: '$user2'
        }
    }, {
        $lookup: {
            from: 'tickets',
            localField: 'ticket1',
            foreignField: '_id',
            as: 'ticket1'
        }
    }, {
        $unwind: {
            path: '$ticket1'
        }
    }, {
        $lookup: {
            from: 'tickets',
            localField: 'ticket2',
            foreignField: '_id',
            as: 'ticket2'
        }
    }, {
        $unwind: {
            path: '$ticket2'
        }
    }, {
        $lookup: {
            from: 'events',
            localField: 'ticket1.event',
            foreignField: '_id',
            as: 'ticket1.event'
        }
    }, {
        $unwind: {
            path: '$ticket1.event'
        }
    }, {
        $lookup: {
            from: 'events',
            localField: 'ticket2.event',
            foreignField: '_id',
            as: 'ticket2.event'
        }
    }, {
        $unwind: {
            path: '$ticket2.event'
        }
    }, {
        $project: {
            "user2.email": 1,
            "ticket1.event.name": 2,
            "ticket1.event.location": 2,
            "ticket1.event.date": 2,
            "ticket1.section": 3,
            "ticket1.row": 4,
            "ticket1.seat": 5,
            "ticket2.event.name": 6,
            "ticket2.event.location": 6,
            "ticket2.event.date": 6,
            "ticket2.section": 7,
            "ticket2.row": 8,
            "ticket2.seat": 9,
            "trade_Status": 10
        }
    }, {
        $project: {
            "MyTicket": '$ticket1',
            "TradeWith": '$user2.email',
            "TradeTicket": '$ticket2',
            "Status": '$trade_Status'
    
        }
    }]; 

    return await Trade.aggregate(query);
};


module.exports = {
    createTrade,
    getTradeById,
    acceptTrade,
    AcceptTradeExceptFrom,
    rejectTrade,
    getTrades,
    getTicketsForTrade,
    ticketForTrade,
    MyAlertsTrades,
    MyRequestsTrades,
    existTradeByTicket1Id,
    deleteTrade
}