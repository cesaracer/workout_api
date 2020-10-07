const mongoose = require('mongoose')

//defining routine model
const routineSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    workouts: {
        type: Array,
        default: [],
        required: false
    }
},
{
    collection: 'Routines'
})

module.exports = mongoose.model('Routine', routineSchema)
