const mongoose = require('mongoose')

const adventureSchema = new mongoose.Schema({
    date: {type: String},
    name:{type: String, required:true},
    location:{type: String},
    activity:{type:String, required: true},
    bookId:{type:String}

})

const Adventure = mongoose.model('Adventure', adventureSchema)
module.exports = Adventure