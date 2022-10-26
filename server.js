require('dotenv').config()

const express = require('express')
const methodOverride = require('method-override')
const db = require('./models/db')

const app = express()
app.use(express.urlencoded({extended:true}))
app.use((req , res, next)=>{
    res.locals.data = {}
    next()
})

app.use(methodOverride('_method'))
app.use(express.static('public'))
app.use('/adventures', require('./controllers/routeController'))

app.listen(3000, () => {
    console.log("Listening on port 3000")
})