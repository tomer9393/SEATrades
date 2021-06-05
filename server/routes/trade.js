const express = require ('express');
var router = express.Router();
const TradeController = require ('../controllers/trade');


router.route('/')
    .get(TradeController.getTrades)
    .post(TradeController.createTrade);


router.route('/id/:id')
    .get(TradeController.getTradeById);

router.route('/acceptTrade/:id')
    .patch(TradeController.acceptTrade);

router.route('/rejectTrade/:id')
    .patch(TradeController.rejectTrade);

router.route('/ticketForTrade/:ticketId')
    .get(TradeController.getTicketsForTrade);

router.route('/boolTrade/:ticketId')
    .patch(TradeController.ticketForTrade);

router.route('/MyAlertsTrades/:userId')
    .get(TradeController.MyAlertsTrades);

router.route('/MyRequestsTrades/:userId')
    .get(TradeController.MyRequestsTrades);

module.exports = router;