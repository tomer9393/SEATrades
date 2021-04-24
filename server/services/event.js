const Event = require('../models/event');

const createEvent = async (name, category, artist, imgUrl, date, location, totalTickets) => {
    const event = new Event({
        name: name,
        category: category,
        artist: artist,
        imgUrl: imgUrl,
        location: location,
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

const getNumOfEventsByCategory = async (category, num) => {
    return await Event.find({ category: category }).sort({ date: 'desc' }).limit(parseInt(num));
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

const updateEvent = async (id, name, category, artist, imgUrl, date, location, totalTickets, soldTickets, soldOut) => {
    const event = await getEventById(id);
    if (!event)
        return null;

    event.name = name;
    event.category = category;
    event.artist = artist;
    event.imgUrl = imgUrl;
    event.date = date;
    event.location = location;
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
                $and: [
                    { name: { $regex: name, $options: 'i' } },
                    { artist: { $regex: artist, $options: 'i' } },
                    { category: { $regex: category, $options: 'i' } },
                    { location: { $regex: location, $options: 'i' } }

                ]
            }
        }
    ]);
};


module.exports = {
    createEvent,
    getEventById,
    getEvents,
    getLatestEvents,
    getEventsByCategory,
    getNumOfEventsByCategory,
    getTicketsByEventId,
    isSoldOut,
    updateEvent,
    updateTicketOfEvent,
    removeEventTicket,
    deleteEvent,
    deleteEventTickets,
    getNumOfEvents,
    homePageSearch
}