const mongoose = require('mongoose')

const foodSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    foodType: {
        type: String,
        required: true
    }
},{
    collection: 'Foods'
})

module.exports = mongoose.model('Food', foodSchema)