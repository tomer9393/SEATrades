import axios from 'axios'

const baseUrl = 'http://localhost:8081/trades';
const ERROR = -1;


export const getTicketsForSwap = async (ticketId) => {
    try {
        const tickets = await axios.get(`${baseUrl}/ticketForTrade/${ticketId}`);
        return tickets;
    } catch (error) { throw ERROR; }
}

export const boolTicketForSwap = async (ticketId) => {
    try {
        const ticket = await axios.patch(`${baseUrl}/boolTrade/${ticketId}`);
        return ticket;
    } catch (error) { throw ERROR; }
}

export const createSwap = async (user1, user2, ticket1, ticket2, swap_Status) => {

    // לחשוב על דחייה (ברגע שהסטאטוס הוא פולס) מה נחזיר למשתמש ונעשה את זה כאן

    try {
        const newSwap = {

            user1: user1,
            user2: user2,
            ticket1: ticket1,
            ticket2: ticket2,
            swap_Status: swap_Status
        };

        const swap = await axios.post(`${baseUrl}/`, newSwap);
        return swap;
    } catch (error) { throw new Error(error); }
}