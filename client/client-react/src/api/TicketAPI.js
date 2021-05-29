import axios from 'axios'
const baseUrl = 'http://localhost:8081/tickets';


export const getTicketsByEventId = async (eventId) => {
    try {
        const tickets = await axios.get(`${baseUrl}/ByEvent/${eventId}`);
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

export const boolTicket = async (eventId, section, row, seat) => { 

    // check if exist ticket according to params - return true=no exist or false = exist

    try {
        const boolTicket = await axios.get(`${baseUrl}/boolTicket/${eventId}/${section}/${row}/${seat}`);
        return boolTicket;
    } catch (error) { throw new Error(error); }
}



export const getSeatsArrayForRow = async (eventId, section, row) => { 

    // get row Array that occupied seat is - 1

    try {
        const seatsArray = await axios.get(`${baseUrl}/mapOfEvent/${eventId}/${section}/${row}`);
        return seatsArray;
    } catch (error) { throw new Error(error); }
}

