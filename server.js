const express = require('express');
const server = express();

const PORT = 1337;

server.get('/', (req, res) => {
  console.log(`New HOME GET request handled ${Date.now()}`)
  res.send('Welcome to the home page')
})

server.get('/translations', (req, res) => {
  console.log(`New Translations GET request handled ${Date.now()}`)
  res.send('Translation object will go here')
})

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`)
});
