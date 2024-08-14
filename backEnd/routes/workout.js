const express = require('express');
const router = express.Router();

//all workout
router.get('/', (req,res) => {
    res.json({message: "all the workouts"});
})

//specific workout
router.get('/:id', (req,res) => {
    res.json({message: "specific workout"});
})

//add a workout
router.post('/', (req,res) => {
    res.json({message: "added a workout"});
})

//delete a workout
router.delete('/:id', (req,res) => {
    res.json({message: "deleted a workout"});
})

//edited an workout
router.patch('/:id', (req,res) => {
    res.json({message: "edited an workout"});
})

module.exports = router;