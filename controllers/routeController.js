const express = require('express')
const router = express.Router()
const dataController = require('./dataController')
const viewController = require('./viewController')


//Index
//New
router.get('/new',viewController.newView)
//Delete
//Update
//Create
//Edit
//Show

module.exports = router