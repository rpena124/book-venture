const Book = require('../models/book')
//const Adventure = require('../models/adventure')

const dataController= {
//Index
index (req, res, next) {
    Book.find({},(err, foundBooks)=>{
        if(err){
            res.status(400).send({
                msg: err.message
            })
        }else{
            res.locals.data.books = foundBooks
            next()
        }
    })
},
//Destroy
destroy(req, res, next){
Book.findByIdAndDelete(req.params.id , (err, deletedBook)=>{
    if(err){
        res.status(400).send({
            msg:err.message
        })
    }else{
        res.locals.data.book = deletedBook
        next()
    }
})
},
//Update
//Create
create(req, res, next){
    Book.create(req.body , (err, createdBook)=>{
        if(err){
            res.status(400).send({
                msg:err.message
            })
        }else{
            res.locals.data.book = createdBook
            next()
        }
    })
},
//Edit/Show
show (req, res, next){
    Book.findById(req.params.id, (err, foundBook)=>{
        if(err){
            res.status(400).send({
                msg:err.message,
                output: 'Could not find a fruit with that ID'
            })
        }else{
            res.locals.data.book = foundBook
            next()
        }
    })
}
}

module.exports = dataController