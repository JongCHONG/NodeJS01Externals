var router = require('express').Router()
const characters = require('../characters.json')
const axios = require('axios')

//Exercice 1
router.get('/json', (req, res) => {
  res.json(characters) //quand on revoye un objet c'est 
})

router.get('/url', (req, res) => {
  axios.get('https://thronesapi.com/api/v2/Characters')
    .then(response => res.json(response.data))
    .catch(error => res.status(error.response.status).send("Not found"))
})

module.exports = router