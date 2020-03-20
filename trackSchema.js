const mongoose = require('mongoose')
const schema = mongoose.Schema

const workout = new Schema({
  Exercise: {
    type: String,
    trim: true,
    required: 'Exercise name is required'
  },
  Type: {
    type: String,
    trim: true,
    required: 'Type of workout'
  },
  Weight: {
    type: Number,
    required: true
  },
  Set: {
    type: Number,
    required: true
  },
  Reps: {
    type: Number,
    required: true
  },
  Duration: {
    type: Number,
    required: true
  }
})

const trackSchema = mongoose.model('trackSchema', workout)

module.exports = trackSchema
