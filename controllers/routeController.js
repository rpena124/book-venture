const express = require('express')
const dataControllerAdventure = require('./dataControllerAdventure')
const router = express.Router()
const dataControllerBook = require('./dataControllerBook')
const viewControllerAdventures = require('./viewControllerAdventure')
const viewControllerBook = require('./viewControllerBook')

// Authentication MiddleWare
//this is equivelant to putting auth in all the routes
router.use((req,res, next) =>{
    if(req.session.loggedIn){
        next()
    }
    else{
        res.redirect('/user/login')
    }
})

/* Book Routes */
//Index
router.get('/', dataControllerBook.index, viewControllerBook.index)
//New
router.get('/new',viewControllerBook.newView)
//Delete
router.delete('/:id', dataControllerBook.destroy, viewControllerBook.redirectHome)

//Update Adventure
router.put('/:id/adventure', dataControllerAdventure.update)
//Update
router.put('/:id', dataControllerBook.update, viewControllerBook.redirectShow)
//Create
router.post('/', dataControllerBook.create, viewControllerBook.redirectShow)
//Edit
router.get('/:id/edit', dataControllerBook.edit, viewControllerBook.edit )
//Show
router.get('/:id', dataControllerBook.show, viewControllerBook.show)

/* Adventure Routes */
//Index
//New
//Delete
router.delete('/:id/adventure', dataControllerAdventure.destroy)

//Create
router.post('/:id', dataControllerAdventure.create, viewControllerAdventures.redirectShow)
// router.get('/:id', dataControllerAdventure.show, viewControllerBook.show)
//Edit
router.get('/:id/:id/adventure/edit', dataControllerAdventure.edit, viewControllerAdventures.edit)
//Show

module.exports = router