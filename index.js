const functions = require('firebase-functions');
const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect("myconnectionstring", { useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection

db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to database'))

const router = require('./routes/main')

app.use(express.json())

app.use('/routines', router)

app.listen(5000, () => console.log('Server started'))

exports.app = functions.https.onRequest(app)
