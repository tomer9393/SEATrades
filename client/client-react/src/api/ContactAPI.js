import axios from 'axios'
const baseUrl = 'http://193.106.55.117:8081';

export const getContactByID = async (contactId) => {
    try {
        const contact = await axios.get(`${baseUrl}/contacts/${contactId}`);
        return contact;
    } catch (error) { throw new Error(error); }
}

export const createContact = async (firstName, lastName, email, phone, message) => {
    try {
        const newContact = {

            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            message: message
        };

        const contact = await axios.post(`${baseUrl}/contacts/`, newContact);
        return contact;
    } catch (error) { throw new Error(error); }
}
