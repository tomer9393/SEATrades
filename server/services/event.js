const Event = require('../models/event');
const Ticket = require('../models/ticket')

const createEvent = async (name, category, artist, imgUrl, date, location, minPrice, totalTickets) => {
    const event = new Event({
        name: name,
        category: category,
        artist: artist,
        imgUrl: imgUrl,
        location: location,
        minPrice: minPrice,
        totalTickets: totalTickets,
        soldTickets: 0,
        soldOut: false
    });

    if (date)
        event.date = date;

    return await event.save();
};

const getEventById = async (id) => {
    return await Event.findById(id);
};

const getEvents = async () => {
    return await Event.find({});
};

const getEventsByCategory = async (category) => {
    return await Event.find({ category: category });
};

const getEventsByName = async (name) => {
    return await Event.find({name : name});
};

const getEventsByArtist = async (artist) => {
    return await Event.find({artist : artist});
};

const getDistincEventsByCategory = async (category) => {
    return await Event.aggregate([
        {
            $match: {
                category: category
            },

        },
        {
            $group:{
                _id: "$name",
                artist: {$first: "$artist"},
                imgUrl: {$first: "$imgUrl"},
                location: { $push: "$location" },
                date: { $push: "$date" },
                minPrice: { $first: "$minPrice"}
            }
        }
    ]);
};


const getNumOfEventsByCategory = async (category,num) => {
    return await Event.find({ category: category }).sort({ soldTickets: -1 }).limit(parseInt(num));
};

const getLatestEvents = async (numOfevents) => {
    return await Event.find().sort({ date: 'desc' }).limit(parseInt(numOfevents));
};

const getTicketsByEventId = async (id) => {
    return await Event.findById(id, { '_id': 0, 'tickets': 1 });
};

const isSoldOut = async (eventId) => {

    const event = await getEventById(eventId);
    if (!event)
        return null;

    if (event.totalTickets === event.soldTickets) {
        event.soldOut = true;
    }

    return await event.soldOut;
};

const updateEvent = async (id, name, category, artist, imgUrl, date, location, minPrice, totalTickets, soldTickets, soldOut) => {
    const event = await getEventById(id);
    if (!event)
        return null;

    event.name = name;
    event.category = category;
    event.artist = artist;
    event.imgUrl = imgUrl;
    event.date = date;
    event.location = location;
    event.minPrice = minPrice;
    event.totalTickets = totalTickets;
    event.soldTickets = soldTickets;
    event.soldOut = soldOut;

    await event.save();
    return event;
};

const updateTicketOfEvent = async (id, ticket) => {


    const event = await getEventById(id);
    if (!event)
        return null;

    if (!ticket)
        return null

    if (event.tickets.indexOf(ticket._id) === -1) {
        event.tickets.push(ticket._id);
        event.soldTickets++;
    }
    else {
        return null;
    }
    
    await isSoldOut(id);

    await event.save();

    return event;
};

const removeEventTicket = async (ticket, ticketId) => {

    const event = await getEventById(ticket.event);
    console.log(event);
    event.soldTickets--;
    await event.save();
    return Event.update({}, { $pull: { "tickets": { $in: ticketId } } }, { multi: true });
};


const deleteEvent = async (id) => {
    const event = await Event.findById(id);;

    if (!event)
        return null;

    await event.remove();
    return event;
};

const deleteEventTickets = async (ticket_ids) => {

    return Event.update({}, { $pull: { "tickets": { $in: ticket_ids } } }, { multi: true });
};



const getNumOfEvents = async () => {
    return await Event.countDocuments();
};


const homePageSearch = async (name, artist, category, location) => {

    if (name === "undefined") {
        name = "";
    }
    if (artist === "undefined") {
        artist = "";
    }
    if (category === "undefined") {
        category = "";
    }
    if (location === "undefined") {
        location = "";
    }

    return await Event.aggregate([
        {
            $match: {
  
                $or: [
                  { name: {$regex: name, $options: 'i' } },
                  { artist: { $regex: artist, $options: 'i' } }
            
                ],
                $and: [
                    { category: { $regex: category, $options: 'i' } },
                    { location: { $regex: location, $options: 'i' } }
                ]
                  
              
            }
        }
    ]);
};

const getSumOfEventsByCategory = async () => {
    return await Event.aggregate([
      {
        $group: {
          _id: "$category",
          count: { $sum: 1 }
        }
      }
    ]);
};


const getSoldTicketsByEvent = async () => {
    return await Ticket.aggregate([{
        $lookup: {
            from: 'events',
            localField: 'event',
            foreignField: '_id',
            as: 'event'
        }
    }, {
        $unwind: {
            path: '$event'
        }
    }, {
        $group: {
            _id: "$event.name",
            soldTickets: {
                $sum: 1
            }
        }
    }, {
        $limit: 4
    }, {
        $sort: {
            "soldTickets": -1
        }
    }]);
};


module.exports = {
    createEvent,
    getEventById,
    getEvents,
    getLatestEvents,
    getEventsByCategory,
    getDistincEventsByCategory,
    getNumOfEventsByCategory,
    getTicketsByEventId,
    isSoldOut,
    updateEvent,
    updateTicketOfEvent,
    removeEventTicket,
    deleteEvent,
    deleteEventTickets,
    getNumOfEvents,
    getEventsByArtist,
    homePageSearch,
    getEventsByName,
    getSumOfEventsByCategory,
    getSoldTicketsByEvent
}