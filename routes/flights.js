let express = require('express')
let router = express.Router()
let flightCtr = require('../controllers/flights')




//GET / functionality load flights from database
router.get('/', flightCtr.index)

//GET /new functionality load form for adding new flights
router.get('/new', flightCtr.new)








module.exports = router