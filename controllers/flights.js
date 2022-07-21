const Flight = require('../models/database')
const Ticket = require('../models/ticket')
const qrCode = require('qrcode')


module.exports = {
    index,
    new: newFlight,
    create,
    show
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

function create(req,res){
    for(keys in req.body){
        if(req.body[keys] === ''){
            delete req.body[keys]
        }
    }
    let flight = new Flight(req.body)
    flight.save((err,data) => {
        if(err)return redirect('/flights/new')
        res.redirect('/flights')
    })
 }

 function show(req, res) {
    Flight.findById(req.params.id , (err,data) => {
        Ticket.find({flight: data._id} , (err,ticket) => {
            qrCode.toDataURL(`${data.flightNo}`, function (err, url) {
                res.render('flights/show', {data, date: data.departs.toLocaleDateString() , src:url , ticket})
            })
        })
    })
 }