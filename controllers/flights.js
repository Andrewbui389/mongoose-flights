const Flight = require('../models/database')


module.exports = {
    index,
    new: newFlight
}

function index(req,res){
    Flight.find({}, (err,flights) => {
        if(err)return res.redirect('/')
        res.render('flights/index', {flights})
    })
}

function newFlight(req,res){
   res.render('flights/new')
}