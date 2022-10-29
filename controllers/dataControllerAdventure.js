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
}
}

module.exports = dataControllerAdventure