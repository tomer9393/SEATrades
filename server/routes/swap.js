const express = require ('express');
var router = express.Router();
const swapController = require ('../controllers/swap');


router.route('/')
    .post(swapController.createSwap);

module.exports = router;