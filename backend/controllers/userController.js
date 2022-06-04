const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

// @desc Register new user
// @route POST/api/users
// @access Public
const registerUser =asyncHandler(async (req,res) => {
    const {name, email, password} =req.body
    if(!name || !email || !password){
        res.status(400)
        throw new Error('Please add all fields')
    }
    // Check to see if user exists
    const userExits = await User.findOne({email})

    if(userExits){
        res.status(400)
        throw new Error('User already exists')
    }
    // Hash Paswword
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // create user
    const user = await User.create({
        name,
        email,
        password: hashedPassword
    })
    // if the user was created
    if(user){
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email
        })
    }else{
        res.status(400)
        throw new Error('Invalid user data') 
    }
}) 

// @desc Authenticate a user
// @route POST/api/users/login
// @access Public
const loginUser = asyncHandler(async (req,res) => {
    const {email, password} = req.body
    // Check for user email
    const user = await User.findOne({email})
    // compares 
    if(user && (await bycrypt.compare(password, user.password))){

    }
    res.json({message:'Login user'})
}) 

// @desc Get user data
// @route GET/api/users/me
// @access Public
const getMe = asyncHandler(async (req,res) => {
    res.json({message:'User data display'})
}) 

module.exports = {
    registerUser,
    loginUser,
    getMe
}
// error Handling working in Postman
// Working in Postman and MongoDB compass