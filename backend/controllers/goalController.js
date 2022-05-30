// @desc Get goals
// @route GET/api/goals 
// @access Private
const getGoals = async (req,res)=>{
    res.status(200).json({message:'Get goals'});
}

// @desc Set goal
// @route POST /api/goals 
// @access Private
const setGoal = async (req,res)=>{
   if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
   }
    res.status(200).json({message:'Set goals'});
}

// @desc update goal
// @route PUT /api/goals/:id
// @access Private
const updateGoal = async (req,res)=>{
    res.status(200).json({message:`Update goal ${req.params.id}`});
}
// @desc delete goal
// @route DELETE /api/goals/:id
// @access Private
const deleteGoal = async (req,res)=>{
    res.status(200).json({message:`Delete goal ${req.params.id}`});
}
module.exports = {
    getGoals, 
    setGoal,
    updateGoal,
    deleteGoal
}