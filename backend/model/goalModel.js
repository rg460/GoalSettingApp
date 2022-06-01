const mongoose = require('mongoose');

const goalSchema =  mongose.Schema({
    text:{
        type: String,
        required: [true,'Please add a text value']
    }
},{
    timestamp: true
})