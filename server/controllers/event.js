const eventService = require('../services/event');
const usersService = require('../services/user');
const ticketService = require('../services/ticket');
const ticket = require('../models/ticket');


const createEvent = async (req, res) => {
  const newEvent = await eventService.createEvent(req.body.name, req.body.category, req.body.artist, req.body.imgUrl, req.body.date, req.body.location, req.body.totalTickets);
  if (!newEvent) {
    return res.status(501).json("No Event created");
  }
  res.json(newEvent);
};

const getEventById = async (req, res) => {
  
    console.log(`req with EventId: ${req.params.id} `);
    if (!req.params.id || !req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
      res.status(400).json("Valid id is required");
    }
    const event = await eventService.getEventById(req.params.id);
    if (!event) {
      return res.status(404).json("Event not found");
    }
  
    res.json(event);
  };

const getEvents = async (req, res) => {
  const events = await eventService.getEvents();
  if (!events) {
    return res.status(500).json("Events not found");
  }
  res.json(events);
};

const getEventsByCategory = async (req, res) => {
    const events = await eventService.getEventsByCategory(req.params.category);
    if (!events) {
      return res.status(500).json("Events not found");
    }
  
    res.json(events);
  };

  const getEventsByName = async (req, res) => {
    const events = await eventService.getEventsByName(req.params.name);
    if (!events) {
      return res.status(500).json("Events not found");
    }
  
    res.json(events);
  };

const getEventsByArtist = async (req, res) => {
  const events = await eventService.getEventsByArtist(req.params.artist);
  if (!events) {
    return res.status(500).json("Events not found");
  }

  res.json(events);
};

const getDistincEventsByCategory = async (req, res) => {
  const events = await eventService.getDistincEventsByCategory(req.params.category);
  if (!events) {
    return res.status(500).json("Events not found");
  }

  res.json(events);
};


const getNumOfEventsByCategory = async (req, res) => {
    const events = await eventService.getNumOfEventsByCategory(req.params.category, req.params.num);
    if (!events) {
      return res.send(0);
    }
  
    res.json(events);
  };


const getLatestEvents = async (req, res) => {
  const events = await eventService.getLatestEvents(req.params.numOfEvents);
  if (!events) {
    return res.status(500).json("Events not found");
  }

  res.json(events);
};




const updateEvent = async (req, res) => {
  if (!req.params.id) {
    res.status(400).json("id is required");
  }

  const event = await eventService.updateEvent(req.params.id, req.body.name, req.body.category, req.body.artist, req.body.imgUrl, req.body.date, req.body.location);
  if (!event) {
    return res.status(404).json('Event not found');
  }

  res.json(event);
};



const deleteEvent = async (req, res) => {
  if (!req.params.id) {
    res.status(400).json("id is required");
  }

  const eventId = req.params.id;

  const tickets = await eventService.getTicketsByEventId(eventId);
  
  tickets["tickets"].forEach(function (ticketId) {
    
    const user = usersService.removeUserTicket(ticketId);
    if (!user){
        return res.status(404).json({ errors: ['user not found for deleted'] });
    }
    const ticket = ticketService.deleteTicket(ticketId);
    if (!ticket){
      return res.status(404).json({ errors: ['ticket not found for deleted'] });
  }

});

  const event = await eventService.deleteEvent(eventId);
  if (!event) {
    return res.status(404).json('Event not found');
  }

  res.send();
};

const getNumOfEvents = async (req, res) => {
  const count = await eventService.getNumOfEvents();
  if (!count) {
    return res.send(0);
  }
  res.json(count);
};

const homePageSearch = async (req, res) => {
  const events = await eventService.homePageSearch(req.params.name, req.params.artist, req.params.category, req.params.location);
  if (!events) {
    return res.status(404).json({ errors: ['events not found'] });
  }
  res.json(events);
};

module.exports = {
  createEvent,
  getEventById,
  getEvents,
  getLatestEvents,
  getEventsByCategory,
  getDistincEventsByCategory,
  getNumOfEventsByCategory,
  updateEvent,
  deleteEvent,
  getNumOfEvents,
  getEventsByArtist,
  homePageSearch,
  getEventsByName
};