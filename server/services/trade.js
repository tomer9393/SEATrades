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

const createTrade = async (body) => {
    const trade = new Trade({
        user1 : body.user1,
        user2 : body.user2,
        ticket1 : body.ticket1,
        ticket2 : body.ticket2,
        trade_Status : body.trade_Status
    });


    try {
        return await trade.save();
    } catch (error) {
        return null;
    }
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
    }else{
        ticket.forTrade = false;
    }

    await ticket.save();


    return ticket;
};

module.exports = {
    createTrade,
    getTicketsForTrade,
    ticketForTrade
}