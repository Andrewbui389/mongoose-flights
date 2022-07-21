let express = require('express')
let router = express.Router()
let ticketsCtr = require('../controllers/tickets')



router.get('/flights/:id/tickets/new' , ticketsCtr.new)

router.post('/flights/:id/tickets' , ticketsCtr.create)



module.exports = router
