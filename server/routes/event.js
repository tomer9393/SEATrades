const express = require ('express');
var router = express.Router();
const eventController = require ('../controllers/event');

router.route('/')
    .get(eventController.getEvents) //V
    .post(eventController.createEvent); //V

router.route('/latestEvents/:numOfEvents')
    .get(eventController.getLatestEvents); //V

router.route('/category/:category')
    .get(eventController.getEventsByCategory);//V

router.route('/eventlist/:name')
.get(eventController.getEventsByName);//V

router.route('/artists/:artist')
    .get(eventController.getEventsByArtist);//V

router.route('/distinct/:category')
    .get(eventController.getDistincEventsByCategory);//

router.route('/homeEvents/:category/:num')
    .get(eventController.getNumOfEventsByCategory); //V

router.route('/events/count')
    .get(eventController.getNumOfEvents); //V


router.route('/id/:id')
    .get(eventController.getEventById) //V
    .patch(eventController.updateEvent) //V
    .delete(eventController.deleteEvent); //V

router.route('/search/:name/:artist/:category/:location')
    .get(eventController.homePageSearch);

module.exports = router;