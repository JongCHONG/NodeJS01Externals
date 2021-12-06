const express = require("express")
const app = express()
// const axios = require('axios')
const port = 5000
const characters = require('./characters.json')

//Exercice 1

app.get('/game-of-thrones/json', (req, res) => {
  res.send(characters)
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})