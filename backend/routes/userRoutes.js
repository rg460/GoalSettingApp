const express = require('express');
const router =express.Router();
const {registerUser,loginUser,getMe} = require('../controllers/userController')

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me', getMe)


module.exports = router

// Post request for login working in PostMan and router changed to get so get request is also working in Postman 