const express = require('express');
const router =express.router();
const {registerUser} = require('../controllers/goalController')

router.post('/', registerUser)


module.exports = router