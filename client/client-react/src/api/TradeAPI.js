import axios from 'axios'

const baseUrl = 'http://193.106.55.117:8081/trades';
const ERROR = -1;


export const getTicketsForTrade = async (ticketId) => {
    try {
        const tickets = await axios.get(`${baseUrl}/ticketForTrade/${ticketId}`);
        return tickets;
    } catch (error) { throw ERROR; }
}

export const boolTicketForTrade = async (ticketId) => {

    // change the ticket for trade

    try {
        const ticket = await axios.patch(`${baseUrl}/boolTrade/${ticketId}`);
        return ticket;
    } catch (error) { throw ERROR; }
}

export const createTrade = async (user1, user2, ticket1, ticket2) => {

    try {
        const newTrade = {
            user1: user1, // request User
            user2: user2, // response User
            ticket1: ticket1, //ticket of user1
            ticket2: ticket2 // ticket of user2
        };

        const trade = await axios.post(`${baseUrl}/`, newTrade);
        return trade;
    } catch (error) { throw new Error(error); }
}

export const acceptTrade = async (tradeId) => {

    // make trade !!!

    try {
        const trade = await axios.patch(`${baseUrl}/acceptTrade/${tradeId}`);
        return trade;
    } catch (error) { throw ERROR; }
}

export const rejectTrade = async (tradeId) => {

    // update trade to rejected.

    try {
        const trade = await axios.patch(`${baseUrl}/rejectTrade/${tradeId}`);
        return trade;
    } catch (error) { throw ERROR; }
}

export const existTradeByTicket1Id = async (ticketId) => {
    try {
        const exist = await axios.get(`${baseUrl}/existTradeByTicket1Id/${ticketId}`);
        return exist;
    } catch (error) { throw ERROR; }
}


export const tradedSeatByTicketId = async (ticketId) => {
    try {
        const exist = await axios.get(`${baseUrl}/tradedSeatByTicketId/${ticketId}`);
        return exist;
    } catch (error) { throw ERROR; }
}

export const MyAlertsTrades = async (userId) => {

    //return user Alert trades

    try {
        const trades = await axios.get(`${baseUrl}/MyAlertsTrades/${userId}`);
        return trades;
    } catch (error) { throw ERROR; }
}

export const MyRequestsTrades = async (userId) => {

    //return user requests trades

    try {
        const trades = await axios.get(`${baseUrl}/MyRequestsTrades/${userId}`);
        return trades;
    } catch (error) { throw ERROR; }
}