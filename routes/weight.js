const express = require('express')
const router = express.Router()
const Weight = require('../models/weight')
const { route } = require('./routines')

//get all weights measured
router.get('/all', async(req, res) => {
    try{
        let weights = await Weight.find()
        res.status(201).json(weights)
    }catch(err){
        res.status(500).json({message: err.message})
    }
})

//add weight amount
router.post('/add', async (req, res) => {
    const newWeight = new Weight({
        amount: req.body.weight
    })
    try{
        await newWeight.save()
        res.status(201).json({message: 'weight added'})
    }
    catch(err){
        res.status(500).json({message: err.message})
    }
})

module.exports = router