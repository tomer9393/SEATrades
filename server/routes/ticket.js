const express = require ('express');
var router = express.Router();
const ticketController = require ('../controllers/ticket');

router.route('/')
    .get(ticketController.getTickets) //V
    .post(ticketController.createTicket); //V

router.route('/event/:eventId')
    .get(ticketController.getTicketsByEventId); //V

router.route('/user/:userId')
    .get(ticketController.getTicketsByUserId); //V

router.route('/tickets/count')
    .get(ticketController.getNumOfTickets); //V


router.route('/id/:id')
    .get(ticketController.getTicketById) //V
    .patch(ticketController.updateTicket) //עדכון בסיסי כרגע
    .delete(ticketController.deleteTicket); //V

router.route('/byId/:ticketId')
    .get(ticketController.getTicketByTicketId);


router.route('/boolTicket/:eventId/:section/:row/:seat')
    .get(ticketController.boolTicket);

router.route('/mapOfEvent/:eventId/:section/:row')
    .get(ticketController.getMApOfEvent);

router.route('/ByEvent/:eventId')
    .get(ticketController.getTicketsByEvent);

module.exports = router;