const eventService = require('../services/event');
const serviceUser = require('../services/user');
const Ticket = require('../models/ticket');
const { events } = require('../models/ticket');
const { json } = require('body-parser');
const { request } = require('http');
const { ObjectId } = require('mongodb');

const createTicket = async (body) => {

    var user = await serviceUser.getUserById(body.user);

    const ticket = new Ticket({
        user : body.user,
        code : user.code,
        QRcode: user.QRcode,
        event : body.event,
        section : body.section,
        row : body.row,
        seat : body.seat,
        price : body.price,
        forTrade : body.forTrade
    });


    const isSoldOut = await eventService.isSoldOut(body.event);

    if(!isSoldOut)
    {
        try {
            await ticket.save(); 
            await eventService.updateTicketOfEvent(body.event, ticket);
            await serviceUser.updateTicketOfUser(body.user, ticket);

        } catch (error) {
            console.log(error);
            return;
        }

    }else{
        return null;
    }

    return ticket;
};

const getTicketById = async (id) => {
    //return await Ticket.findById(id);
    try {
        let data = await Ticket.findById(id);
        //console.log(`findById success--> ${data}`);
        if(!data) {
          throw new Error('no document found');
        }
        return data;
    } catch (error) {
        console.log(`findById error--> ${error}`);
        return error;
    }
};

const getTicketByTicketId = async (ticketId) => {
    var query = [{
        $lookup: {
            from: 'events',
            localField: 'event',
            foreignField: '_id',
            as: 'event'
        }
    }, {
        $unwind: {
            path: "$event"
        }
    }, {
        $match: {
            _id: ObjectId(ticketId)
        }
    }];
    
        
    return await Ticket.aggregate(query);
};

const getTickets = async () => {
    return await Ticket.find({});
};


const getTicketsByEventId = async (id) => {
    return await Ticket.find({'event' : [id]});
};

const getTicketsByEvent = async (id) => {
    return await Ticket.find({'event' : [id]}, {'section':1, 'row':2, 'seat':3 });
};


const getTicketsByUserId = async (userId) => {

    var query = [
        
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
            user: ObjectId(userId)
        }
    },  
    {
        $sort: {
            "event.date": 1
        }
    }
]; 

    return await Ticket.aggregate(query);
};


const updateTicket = async (id, body) => {
    const ticket = await getTicketById(id);
    if (!ticket){
        return null;
    }
    if(!body.user){
        body.user = ticket.user;
    }
    var user = await serviceUser.getUserById(body.user);

    var event = body.event;
    var section = body.section;
    var row = body.row;
    var seat = body.seat;
    var price = body.price;
    var forTrade = body.forTrade;

    if(!event){
        event = ticket.event;
    }
    if(!section){
        section = ticket.section;
    }
    if(!row){
        row = ticket.row;
    }
    if(!seat){
        seat = ticket.seat;
    }
    if(!price){
        price = ticket.price;
    }
    if(!forTrade){
        forTrade = ticket.forTrade;
    }

    ticket.user = body.user;
    ticket.code = user.code;
    ticket.QRcode = user.QRcode;
    ticket.event = event;
    ticket.section = section;
    ticket.row = row;
    ticket.seat = seat;
    ticket.price = price;
    ticket.forTrade = forTrade;
    
    await ticket.save();
    return ticket;
};

const updateTicketByTrade = async (id, userObjectId) => {
    const ticket = await getTicketById(id);
    if (!ticket){
        return null;
    }
        
    const user = await serviceUser.getUserById(userObjectId);
    if(!user){
        return null;
    }

    const event = await eventService.getEventById(ticket.event);
    if(!event){
        return null;
    }

    //update the ticket - user, code & QRcode - function
    ticket.user = user;
    ticket.code = user.code;
    ticket.QRcode = user.QRcode;
    ticket.forTrade = false;

    await ticket.save();

    // add ticket to user in tickets array

    await serviceUser.updateTicketOfUser(userObjectId, ticket);

    return ticket;
};

const deleteTicket = async (id) => {
    const ticket = await getTicketById(id);
    if (!ticket){  return null;}


    await ticket.remove();


    return ticket;
};



const getNumOfTickets = async () => {
    return await Ticket.countDocuments();
};

const boolTicket = async (eventId, section, row, seat) => {

    const ticket = await Ticket.aggregate(
        [{
            $match: {
                event: ObjectId(eventId),
                section: section,
                row: row,
                seat: seat
            }
        }]
    );

    if (!ticket[0]){

        return true;
    }

    return false;
};





const getMApOfEvent = async (eventId, section, row ) => {

    var map = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] ;

    const tickets = await Ticket.aggregate(
        [{
            $match: {
                event: ObjectId(eventId),
                section: section,
                row: row
            }
        }]
    );

    for (let i = 0; i < tickets.length; i++) {
        
        map[tickets[i].seat - 1] = 1;
    }

    console.log(map);

    return map;
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
    updateTicketByTrade,
    deleteTicket,
    getNumOfTickets,
    boolTicket,
    getMApOfEvent
}