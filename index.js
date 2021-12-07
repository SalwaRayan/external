const express = require("express")
const app = express()
const axios = require("axios")

const port = 5000

const gameOfThrones = require('./EX1/game-of-thrones')
const pokemon = require('./EX2/pokemon')

app.listen(port, () => {
  console.log("Server started on port: " + port)
})

app.use('/game-of-thrones', gameOfThrones)
app.use('/pokemon', pokemon)