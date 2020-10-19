const mongoose = require('mongoose')
const { collection } = require('./routine')

const weightSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: true
    }
},
{
    collection: 'Weight'
})

module.exports = mongoose.model('Weight', weightSchema)