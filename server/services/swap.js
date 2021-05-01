const eventService = require('../services/event');
const serviceUser = require('../services/user');
const Swap = require('../models/swap');
const { events } = require('../models/ticket');
const { json } = require('body-parser');
const { request } = require('http');


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

module.exports = {
    createSwap
}