const router = require('express').Router()
const pet = require('../controllers/Pets')

router.route('/pets')
  .get(pet.index)
  .post(pet.create)




module.exports = router