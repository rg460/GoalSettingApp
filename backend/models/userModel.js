const mongoose = require('mongoose')

const userSchema = mongoose.schema({
    name:{
        type: String,
        required: [true,'Please add a name']
    }
},{
    timestamp: true
})

module.exports = mongoose.model('Goal',userSchema)