const express = require('express');
const router = express.Router();
const {getGoals} = require('../controllers/goalController')
const {setGoal} = require('../controllers/goalController')
const {updateGoal} = require('../controllers/goalController')
const {deleteGoal} = require('../controllers/goalController')


router.get('/', getGoals)
router.post('/',  setGoal)
router.put('/:id', updateGoal)
router.delete('/:id', deleteGoal)

module.exports = router

// Routes Working on Postman