import axios from 'axios'
const baseUrl = 'http://localhost:8081/tickets';


export const getTicketsByEventId = async (eventId) => {
    try {
        const tickets = await axios.get(`${baseUrl}/event/${eventId}`);
        return tickets;
    } catch (error) { throw new Error(error); }
}

export const getTicketsByUserId = async (userId) => {
    try {
        const tickets = await axios.get(`${baseUrl}/user/${userId}`);
        return tickets;
    } catch (error) { throw new Error(error); }
}

export const createTicket = async (user, event, section, row, seat, price) => {

    try {
        const newTicket = {

            user: user,
            event: event,
            section: section,
            row: row,
            seat: seat,
            price: price,
            forTrade: false
        };

        const ticket = await axios.post(`${baseUrl}/`, newTicket);
        return ticket;
    } catch (error) { throw new Error(error); }
}
