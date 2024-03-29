import axios from 'axios'

const baseUrl = 'http://193.106.55.117:8081/events';
const ERROR = -1;

//get all events with array of ticket
export const getEvents = async () => {
    try {
        const events = await axios.get(`${baseUrl}/`);
        return events;
    } catch (error) { throw ERROR; }
}

export const getLatestEvents = async (numOfEvents) => {
    try {
        const events = await axios.get(`${baseUrl}/latestEvents/${numOfEvents}`);
        return events;
    } catch (error) { throw new Error(error); }
}

export const getEventsByCategory = async (category) => {
    try {
        const events = await axios.get(`${baseUrl}/category/${category}`);
        return events;
    } catch (error) { throw new Error(error); }
}


export const getEventsByName = async (name) => {
    try {
        const events = await axios.get(`${baseUrl}/eventlist/${name}`);
        return events;
    } catch (error) { throw new Error(error); }
}

export const getEventsByArtist = async (artist) => {
    try {
        const events = await axios.get(`${baseUrl}/artists/${artist}`);
        return events;
    } catch (error) { throw new Error(error); }
}

export const getDistincEventsByCategory = async (category) => {
    try {
        const events = await axios.get(`${baseUrl}/distinct/${category}`);
        return events;
    } catch (error) { throw new Error(error); }
}

export const getNumOfEventsByCategory = async (category, num) => {
    try {
        const events = await axios.get(`${baseUrl}/homeEvents/${category}/${num}`);
        return events;
    } catch (error) { throw new Error(error); }
}


//get event by id include the tickets 
export const getEventById = async (id) => {
    try {
        const event = await axios.get(`${baseUrl}/id/${id}`);
        return event;
    } catch (error) { return ERROR; }
}

export const homePageSearch = async (name ,artist ,category, location) => {
    try {
        const events = await axios.get(`${baseUrl}/search/${name}/${artist}/${category}/${location}`);
        return events;
    } catch (error) { throw new Error(error); }
}


