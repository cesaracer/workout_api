const express = require('express')
const router = express.Router()
const Routine = require('../models/routine')

router.get('/all', async (req, res) => {
    try{
        let routines = await Routine.find()
        res.status(201).json(routines)
    }
    catch(err){
        res.status(500).json({message: err.message})
    }
})

router.post('/add', async (req, res) => {
    const routine = new Routine({
        name: req.body.name,
        workouts: req.body.workouts
    })
    try{
        await routine.save()
        res.status(201).json({message: 'saved'})
    }
    catch(err){
        res.status(500).json({message: err.message})
    }
})

router.delete('/delete/:id', async (req, res )=>{
    try{
        const routine = await Routine.findById(req.params.id)
        routine.remove()
        res.status(201).json({message: 'deleted'})
    }
    catch(err){
        res.status(500).json({message: err.message})
    }
})

router.patch('/edit/:id', async (req, res) => {
    try{
        let routine = await Routine.findById(req.params.id)
        if(req.body.name !== ""){
            routine.name = req.body.name
        }
        if(req.body.workouts !== []){
            routine.workouts = req.body.workouts
        }
        await routine.save()
        res.status(201).json({message: "Changed"})
    }
    catch(err){
        res.status(500).json({message: err.message})
    }
})
module.exports = router