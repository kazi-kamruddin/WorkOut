const express = require('express');
const workoutModel = require('../models/workoutModel');
const router = express.Router();

//all workout
router.get('/', (req,res) => {
    res.json({message: "all workouts"});
})

//specific workout
router.get('/:id', (req,res) => {
    res.json({message: "specific workout"});
})

// //add a workout
// router.post('/', (req,res) => {
//     res.json({message: "added a workout"});
// })

//add a workout
router.post('/', async (req,res) => {
    
    //res.json({message: "should i go or should i stay"});
    console.log(req.body);
    
    const {title, load, reps} = req.body;
    try{
        const workout = await workoutModel.create({title, load, reps});
        res.status(200).json(workout);
    }
    catch (error){
        res.status(400).json({error : error.message});
    }
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