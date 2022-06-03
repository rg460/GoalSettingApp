const express = require('express');
const router =express.router();
const {registerUser} = require('../controllers/userController')

router.post('/', registerUser)


module.exports = router