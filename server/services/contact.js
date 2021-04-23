const Contact = require('../models/contact');

const createContact = async (firstName,lastName,email,phone,message) => {
    const contact = new Contact({ 
        firstName: firstName,
        lastName: lastName,
        email:email,
        phone:phone,
        message:message

     });

    let contactDocument = await contact.save();

    return contactDocument;
}

const getContactByID= async (id)=> {
    return await Contact.findById(id);
}

const UpdateContact = async(id,firstName,lastName,email,phone,message)=> {
    const contact = await getContactByID(id);
    if(!contact)
        return null;
    contact.firstName=firstName;
    contact.lastName=lastName;
    contact.email=email;
    contact.phone=phone;
    contact.message=message;
    contact.published=Date.now();
    await contact.save();
    return contact;

}

const DeleteContact = async(id)=> {
    const contact = await getContactByID(id);
    if(!contact)
        return null;
   
    await contact.remove();
    return contact;

}

const getAllContacts = async () => {
    return await Contact.find();
}

module.exports = {
    createContact,
    getContactByID,
    UpdateContact,
    DeleteContact,
    getAllContacts
}