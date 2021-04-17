const contact = require('../models/contact');
const contactService = require('../services/contact');
const nodemailer = require("nodemailer");

const createContact = async (req, res) => {
  const newContact = await contactService.createContact(req.body.firstName, req.body.lastName, req.body.email, req.body.phone , req.body.message);
  if (!newContact) {
    return res.status(501).json("No contact created");
  }
  sendMail(req.body.email, req.body.firstName).catch(console.error);
  res.json(newContact);

};

const sendMail = async (email, name) => {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "topnews906@gmail.com",
      pass: "Zz12345678",
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Top News" <topnews906@gmail.com>', // sender address
    to: email, // list of receivers
    subject: "Thank you for contact Top News", // Subject line
    text: "Hello " + name + "Thank you for contact TOP NEWS", // plain text body
    html: "<p><b>Hello " + name + "</b></p> <p>Thank you for contact TOP NEWS</p>", // html body
  });
}

const getContactByID = async (req, res) => {
  if (!req.params.id) {
    res.status(400).json("id is required");
  }
  const contact = await contactService.getContactByID(req.params.id);
  if (!contact) {
    return res.status(404).json('Contact not found');
  }
  res.json(contact);
};

const UpdateContact = async (req, res) => {
  if (!req.params.id) {
    res.status(400).json("id is required");
  }

  const contact = await contactService.UpdateContact(req.params.id, req.body.firstName, req.body.lastName, req.body.email, req.body.phone , req.body.message);
  if (!contact) {
    return res.status(404).json('contact not found');
  }

  res.json(contact);
};


const DeleteContact = async (req, res) => {
  if (!req.params.id) {
    res.status(400).json("id is required");
  }
  const contact = await contactService.DeleteContact(req.params.id);
  //params mean from the URL
  if (!contact) {
    return res.status(404).json('contact not found');
  }
  res.send();
};

const getAllContacts = async (req, res) => {
  const contacts = await contactService.getAllContacts();
  if (!contacts) {
    return res.status(500).json("Contacts not found");
  }
  res.json(contacts);
};

module.exports = {
  createContact,
  getContactByID,
  UpdateContact,
  DeleteContact,
  getAllContacts
};