const express = require('express');
var router = express.Router();
const contactController = require('../controllers/contact');

router.route('/')
    .get(contactController.getAllContacts)
    .post(contactController.createContact);

router.route('/:id')
    .get(contactController.getContactByID)
    .patch(contactController.UpdateContact)
    .delete(contactController.DeleteContact);

module.exports = router;