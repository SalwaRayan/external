const express = require('express')
const app = express()
const axios = require("axios")

const port = 5000

app.listen(port, () => {
  console.log('Server started on port: ' + port)
})

app.get('/game-of-thrones/json', (req, res) => {
  
})
app.get('/game-of-thrones/url', (req, res) => {
  axios.get('https://thronesapi.com/api/v2/Characters')
  .then(response => res.json(response.data))
  .catch((error) => console.log(error))
})