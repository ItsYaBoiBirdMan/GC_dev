var express = require('express');
var router = express.Router();
var aModel = require("../models/attackModel.js");
            
router.get('/', async function(req, res, next) {
    console.log("Attacked all cards")
    let result = await aModel.attackCardById();
    res.status(result.status).send(result.result);
});

module.exports = router;