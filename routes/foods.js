const express = require('express')
const router = express.Router()
const Food = require('../models/food')

//get all food items
router.get('/all', async (req, res) => {
    let foods = await Food.find()
    try{
        res.status(201).json(foods)
    }catch(err){
        res.status(500).json({message: err.message})
    }
})

//add food item
router.post('/add', async (req, res) => {
    const food = new Food({
        name: req.body.name,
        foodType: req.body.type
    })
    try{
        await food.save()
        res.status(201).json({message: 'item added'})
    }
    catch(err){
        res.status(500).json({message: err.message})
    }
})

//remove food item
router.delete('/delete/:id', async(req, res) => {
    const food = Food.findById(req.params.id)
    try{
        await food.remove()
        res.status(201).json({message: 'item removed'})
    }
    catch(err){
        res.status(201).json({message: err.message})
    }
})

//change food
router.patch('/update/:id', async (req, res) => {
    try{
        let food = await Food.findById(req.params.id)
        if(req.body.name !== ''){
            food.name = req.body.name
        }
        if(req.body.type !== ''){
            food.foodType = req.body.type
        }
        await food.save()
        res.status(201).json({message: 'item updated'})
    }
    catch(err){
        res.status(500).json({message: err.message})
    }
})

module.exports = router