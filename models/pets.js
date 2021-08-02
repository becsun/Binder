const mongoose = require('mongoose')

const petsSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  image: { type: String, required: true },
  location: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String },
  animal: { type: String, required: true },
  description: { type: String }
  
})

module.exports = mongoose.model('Pets', petsSchema)