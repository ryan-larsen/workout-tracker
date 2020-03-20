const mongoose = require('mongoose')
const trackSchema = require('./trackSchema.js')

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/trackerDB', { useNewUrlParser: true })

const data = {
  array: [],
  boolean: false,
  string: 'hey',
  number: 1
}

trackSchema.create(data)
  .then(trackerDB => {
    console.log(trackerDB)
  })
  .catch(({ message }) => {
    console.log(message)
  })
