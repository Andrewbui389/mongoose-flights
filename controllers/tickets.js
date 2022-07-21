const Ticket = require('../models/ticket')
const Flight = require('../models/database')


module.exports = {
    new: newTicket,
    create
}


function newTicket(req , res){
    console.log(req.params.id)
    res.render('./tickets/new' , {id:req.params.id})
}

function create(req , res){
    Flight.findById(req.params.id , (err,data) => {
        if(err) return redirect('/flights')
        req.body.flight = data._id
        let ticket = new Ticket(req.body)
        ticket.save()
        res.redirect(`/flights/${data._id}`)
    })
    
}