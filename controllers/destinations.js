const Flight = require('../models/database')

module.exports = {
    create
}


function create(req, res) { 
    Flight.findById(req.params.id , (err,data) => {
        if(err) return res.redirect(`flights/${req.params.id}`)
        data.destination.push(req.body)
        data.save((err,data) => {
            console.log(data)
            res.redirect(`/flights/${data._id}`)
        })
    })
}