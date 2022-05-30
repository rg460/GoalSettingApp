const express = require('express');
const router = express.Router();
const {getGoals,setGoal,updateGoal,deleteGoal} = require('../controllers/goalController')

router.route('/').get(getGoals).post(setGoal)

router.put('/:id', updateGoal)
router.delete('/:id', deleteGoal)

module.exports = router

// Routes Working on Postman