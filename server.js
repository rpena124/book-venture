require('dotenv').config()

const express = require('express')
const methodOverride = require('method-override')
const cors = require('cors')// Lets us know who is allowed 
const session = require("express-session")

const app = express()
app.use(express.urlencoded({extended:true}))
app.use((req , res, next)=>{
    res.locals.data = {}
    next()
})
// Authentication
const MongoStore = require('connect-mongo')
//To setup our sessions so we dont have to continue to log in
app.use(
    session({
      secret: process.env.SECRET,
      store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }),
      saveUninitialized: true,
      resave: false,
    })
)
app.use(cors())//Allowing access



//view engine
app.engine('jsx', require('jsx-view-engine').createEngine())
app.set('view engine', 'jsx')

//database connection
const db = require('./models/db')
db.once('open', () => {
    console.log('Connected to Mongoose db')
})

//middleware

app.use(methodOverride('_method'))
app.use(express.static('public'))
app.use('/adventures', require('./controllers/routeController'))
app.use('/user',require('./controllers/authController'))

//port
app.listen(3000, () => {
    console.log("Listening on port 3000")
})