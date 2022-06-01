const mongoose = require('mongoose')

const userSchema = mongoose.schema({
    name:{
        type: String,
        required: [true,'Please add a name']
    },email:{
        type: String,
        required: [true,'Please add an email address'],
        unique: true
    },password:{
        type: String,
        required: [true,'Please add a password']
    }
})

module.exports = mongoose.model('Goal',userSchema)