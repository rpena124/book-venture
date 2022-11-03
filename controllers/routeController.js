const express = require('express')
const dataControllerAdventure = require('./dataControllerAdventure')
const router = express.Router()
const dataControllerBook = require('./dataControllerBook')
const viewControllerAdventures = require('./viewControllerAdventure')
const viewControllerBook = require('./viewControllerBook')

/* Book Routes */
//Index
router.get('/', dataControllerBook.index, viewControllerBook.index)
//New
router.get('/new',viewControllerBook.newView)
//Delete
router.delete('/:id', dataControllerBook.destroy, viewControllerBook.redirectHome)
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
//Update
//Create
router.post('/:id', dataControllerAdventure.create, viewControllerAdventures.redirectShow)
// router.get('/:id', dataControllerAdventure.show, viewControllerBook.show)
//Edit
//Show

module.exports = router