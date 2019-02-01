var express = require('express')

var router = express.Router()

// Getting the Donut Controller that we just created

var DonutController = require('../../controllers/donut.js');


// Map each API to the Controller FUnctions

router.get('/', DonutController.getDonuts)

router.post('/', DonutController.createDonut)

router.put('/', DonutController.updateDonut)

router.delete('/:id',DonutController.removeDonut)


// Export the Router

module.exports = router;