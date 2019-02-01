var express = require('express')

var router = express.Router()

var donuts = require('./api/donut.route')


router.use('/donuts', donuts);

module.exports = router;