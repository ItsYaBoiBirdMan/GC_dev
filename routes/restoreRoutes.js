var express = require('express');
var router = express.Router();
var rModel = require("../models/restoreModel.js");
            
router.get('/', async function(req, res, next) {
    console.log("Restored all cards")
    let result = await rModel.restoreAllCards();
    res.status(result.status).send(result.result);
});

module.exports = router;