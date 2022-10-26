const { default: mongoose } = require('mongoose')
const mngoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser : true,
    useUnifiedTopology : true
})

module.exports = mongoose.connection