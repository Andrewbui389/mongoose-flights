let express = require('express')
let router = express.Router()
let destinationCtr = require('../controllers/destinations')

//POST /:id/destination Functionality to add new destination to current flight
router.post('/flights/:id/destination' , destinationCtr.create)

module.exports = router