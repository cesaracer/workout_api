const functions = require('firebase-functions');
const express = require('express')
const app = express()
const mongoose = require('mongoose')

//connecting to db
mongoose.connect("myconnectionstring", { useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection

db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to database'))

//initializing routers
const routineRouter = require('./routes/routines')
const foodRouter = require('./routes/foods')
const weightRouter = require('./routes/weight')

app.use(express.json())

//defining router path
app.use('/routines', routineRouter)
app.use('/food', foodRouter)
app.use('/weight', weightRouter)

app.listen(5000, () => console.log('Server started'))

exports.app = functions.https.onRequest(app)
