const Adventure = require('../models/adventure')
const Book = require('../models/book')



const dataControllerBook= {
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
update(req, res, next){

    Book.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedBook)=>{
        // console.log(req.params.id)
        // console.log(req.body)
        if(err){
            res.status(400).send({
                msg:err.message,
                output: 'Could not update book with that ID'
            })
        }else{
            res.locals.data.book = {book : updatedBook}
            next()
        }
    })
},
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
edit (req, res, next){
    Book.findById(req.params.id, (err, foundBook)=>{
        // console.log("The edit data route is: "+foundBook)
        if(err){
            res.status(400).send({
                msg:err.message,
                output: 'Could not find a book with that ID'
            })
        }
        else{
            res.locals.data.book = foundBook
            next()
        }
    })
},
//Edit/Show
show (req, res, next){
    Book.findById(req.params.id, (err, foundBook)=>{
        Adventure.find({bookId: req.params.id},(err, foundAdventures)=>{
            if(err){
                res.status(400).send({
                    msg: err.message,
                    output: 'Could not find a adventure with that ID'
                })
            }else{
                res.locals.data.book = {book: foundBook , adventureList : foundAdventures }
                next()
            }
        })
        if(err){
            res.status(400).send({
                msg:err.message,
                output: 'Could not find a book with that ID'
            })
        }

    })
}
}

module.exports = dataControllerBook