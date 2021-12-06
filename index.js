const express = require("express")
const app = express()
const axios = require('axios')
const port = 5000
const characters = require('./characters.json')

//Exercice 1
app.get('/game-of-thrones/json', (req, res) => {
  res.send(characters)
})

app.get('/game-of-thrones/url', (req, res) => {
  axios.get('https://thronesapi.com/api/v2/Characters')
    .then(response => res.json(response.data))
    .catch(error => res.status(error.response.status).send("Not found"))
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})