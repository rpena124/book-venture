const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    title : {type: String, require: true},
    author: {type: String, require:true},
    bookCoverArt:{type:String, require:true}
})

const Book = mongoose.model('Book',bookSchema)
module.exports = Book