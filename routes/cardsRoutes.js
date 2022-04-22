var express = require('express');
var router = express.Router();
var cModel = require("../models/cardsModel");
            
router.get('/', async function(req, res, next) {
    console.log("Get all cards")
    let result = await cModel.getAllCards();
    res.status(result.status).send(result.result);
});

module.exports = router;