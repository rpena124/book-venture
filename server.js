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

//view engine
app.engine('jsx', require('jsx-view-engine').createEngine())
app.set('view engine', 'jsx')

//database connection
db.once('open', () => {
    console.log('Connected to Mongoose db')
})

//middleware

app.use(methodOverride('_method'))
app.use(express.static('public'))
app.use('/adventures', require('./controllers/routeController'))

//port
app.listen(3000, () => {
    console.log("Listening on port 3000")
})