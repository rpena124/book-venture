const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    title : {type: String, required: true},
    author: {type: String, required:true},
    bookCoverArt:{type:String, required:true},
    quote:{type:String}
})

const Book = mongoose.model('Book',bookSchema)
module.exports = Book