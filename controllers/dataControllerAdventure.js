const Adventure = require('../models/adventure')

const dataControllerAdventure = {

//Create
create(req, res, next){
    Adventure.create(req.body, (err, createdAdventure)=>{
        if(err){
            res.status(400).send({
                msg:err.message
            })
        }else{
            res.locals.data.adventure = createdAdventure
            next()
        }
    })
},
//Destroy
destroy(req, res, next){
Adventure.findByIdAndDelete(req.params.id, (err, deletedAdventure)=>{
    if(err){
        res.status(400).send({
            msg:err.message
        })
    }
    else{
        res.locals.data.adventure = deletedAdventure
        // req.params.id = res.locals.data.adventure.bookId
        // next()
        res.redirect(`/adventures/${deletedAdventure.bookId}`)
    }
})
},
//Update
update(req, res, next){

    Adventure.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedAdventure)=>{
        // console.log(req.params.id)
        // console.log(req.body)
        if(err){
            res.status(400).send({
                msg:err.message
            })
        }else{
            res.locals.data.adventure = updatedAdventure
            next()
        }
    })
}

}

module.exports = dataControllerAdventure