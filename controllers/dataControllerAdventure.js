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
},
//Show/ Edit
// show(req, res, next){
//     Adventure.find({},(err, foundAdventures)=>{
//         if(err){
//             res.status(400).send({
//                 msg: err.message,
//                 output: 'Could not find a adventure with that ID'
//             })
//         }else{
//             res.locals.data.adventures = foundAdventures 
//             next()
//         }
//     })
//     console.log(foundAdventures)
// }
}

module.exports = dataControllerAdventure