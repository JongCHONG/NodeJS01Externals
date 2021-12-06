var router = require('express').Router()
const axios = require('axios')

//Exercice 2
router.get('/pokemon/limit/:limit/offset/:offset', (req, res) => {
  const { limit, offset } = req.params
  axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`)
    .then(response => res.json(response.data))
    .catch(error => res.status(error.response.status).send("Not found"))
})

router.get('/pokemon/id/:id', (req, res) => {
  const { id } = req.params
  axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(response => res.json(response.data))
    .catch(error => res.status(error.response.status).send("Not found"))
})
module.exports = router