import axios from 'axios'

const baseUrl = 'http://localhost:8081/trades';
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

export const createTrade = async (user1, user2, ticket1, ticket2, trade_Status) => {

    // לחשוב על דחייה (ברגע שהסטאטוס הוא פולס) מה נחזיר למשתמש ונעשה את זה כאן

    try {
        const newTrade = {

            user1: user1,
            user2: user2,
            ticket1: ticket1,
            ticket2: ticket2,
            trade_Status: trade_Status
        };

        const trade = await axios.post(`${baseUrl}/`, newTrade);
        return trade;
    } catch (error) { throw new Error(error); }
}