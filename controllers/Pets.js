const Pet = require('../models/pets')

async function petIndex(req, res) {
  try {
    const pets = await Pet.find()
    res.status(200).json(pets)
  } catch (err){
    res.json(err)
  }
}

async function petCreate(req, res){
  try {
    const createdPet = await Pet.create(req.body)
    res.status(201).json(createdPet)
  } catch (err){
    res.json(err)
  }
}

async function petShow(req,res){
try{
    

}catch(err){
    res.json(err)
}
}

module.exports = {
  index: petIndex,
  create: petCreate
}