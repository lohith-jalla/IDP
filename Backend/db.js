const mongoose = require("mongoose");

mongoose.connect("")

const ridesSchema = mongoose.Schema({
    
})

const rides =mongoose.model('Rides' ,ridesSchema)

module.exports={
    rides : rides
}