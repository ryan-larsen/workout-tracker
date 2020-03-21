const express = require('express')
const logger = require('morgan')
const mongoose = require('mongoose')
const path = require('path')

const PORT = process.env.PORT || 3000

const db = require('./models')

const app = express()

app.use(logger('dev'))
app.use(express.static('public'))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Mongoose connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout_trackerdb',
  { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection
  .once('open', () => console.log('Good to go!'))
  .on('error', (error) => {
    console.warn('Error', error)
  })

db.workout.create({ name: 'Workout Tracker' })
  .then(dbworkout => {
    console.log('log from inside dbworkout.create ' + dbworkout)
  })
  .catch(({ message }) => {
    console.log('this is the error:' + message)
  })

app.get('/', (req, res) => {
  console.log('Find root')
  res.sendFile(path.join(__dirname, './public/index.html'))
})
app.use(require('./controllers/exercises'))
app.use(require('./controllers/workout'))

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`)
})
