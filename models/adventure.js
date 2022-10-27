const mongoose = require('mongoose')

const adventureSchema = new mongoose.Schema({
    date: {type: Date, required:false},
    name:{type: String, required:true},
    location:{type: String, required: false},
    activity:{type:String, required: true}
})

const Adventure = mongoose.model('Adventure', adventureSchema)
module.exports = Adventure