const asyncHandler = require('express-async-handler')

// @desc    Get goals
// @route   GET /api/goals
// @access  Private
const getGoals = asyncHandler(async (req ,res) => {
    res.status(200).json({message:'get your goals'})
})

// @desc    set goals
// @route   POST /api/goals
// @access  Private
const setGoal = asyncHandler(async (req ,res) => {
    if(!req.body.text){
     res.status(400)
     throw new Error('Please add a text feild') 
    }

    res.status(200).json({ message : 'Set goals'})
})

// @desc    update goals
// @route   PUT /api/goals:id
// @access  Private
const updateGoal = asyncHandler(async (req ,res) => {
    res.status(200).json({ message : `update goal ${req.params.id}`})
})

// @desc    delete goals
// @route   PUT /api/goals/:id
// @access  Private
const deleteGoal = asyncHandler(async (req ,res) => {
    res.status(200).json({ message : `Delete goal ${req.params.id}`})   
})


module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
}