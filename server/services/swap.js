const eventService = require('../services/event');
const ticketService = require('../services/ticket');
const serviceUser = require('../services/user');
const Ticket = require('../models/ticket');
const Swap = require('../models/swap');
const { events } = require('../models/ticket');
const { json } = require('body-parser');
const { request } = require('http');
const { ObjectId } = require('mongodb');
const { Object } = require('mongodb');

const createSwap = async (body) => {
    const swap = new Swap({
        user1 : body.user1,
        user2 : body.user2,
        ticket1 : body.ticket1,
        ticket2 : body.ticket2,
        swap_Status : body.swap_Status
    });


    try {
        return await swap.save();
    } catch (error) {
        return null;
    }
};

const getTicketsForSwap = async ( ticketId ) => {

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

const ticketForSwap = async (ticketId) => {
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
    createSwap,
    getTicketsForSwap,
    ticketForSwap
}