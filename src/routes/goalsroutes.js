const express = require('express')
const router = express.Router()

const { getGoals , setGoal, updateGoal, deleteGoal} = require('../controllers/goal.controlers')

// router.get('/', (req, res) => {
    //     res.status(200).json({ message : 'Get your goals'})
    // })
    
    
router.get('/',getGoals)

router.post('/', setGoal)  

router.put('/:id', updateGoal)

router.delete('/:id', deleteGoal)

module.exports = router