const express = require ('express');
var router = express.Router();
const TradeController = require ('../controllers/trade');


router.route('/')
    .post(TradeController.createTrade);

router.route('/ticketForTrade/:ticketId')
    .get(TradeController.getTicketsForTrade);

router.route('/boolTrade/:ticketId')
    .patch(TradeController.ticketForTrade);

module.exports = router;