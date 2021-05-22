const express = require ('express');
var router = express.Router();
const swapController = require ('../controllers/swap');


router.route('/')
    .post(swapController.createSwap);

router.route('/ticketForSwap/:ticketId')
    .get(swapController.getTicketsForSwap);

router.route('/boolSwap/:ticketId')
    .patch(swapController.ticketForSwap);

module.exports = router;