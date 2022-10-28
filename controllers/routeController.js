const express = require('express')
const router = express.Router()
const dataController = require('./dataController')
const viewController = require('./viewController')


//Index
router.get('/', dataController.index, viewController.index)
//New
router.get('/new',viewController.newView)
//Delete
router.delete('/:id', dataController.destroy, viewController.redirectHome)
//Update
//Create
router.post('/', dataController.create, viewController.redirectShow)
//Edit
//Show
router.get('/:id', dataController.show, viewController.show)

module.exports = router