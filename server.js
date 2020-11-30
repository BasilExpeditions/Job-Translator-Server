const express = require('express');
const server = express();
const ejs = require('ejs');

const PORT = 1337;


server.set('view-engine', ejs);

server.get('/', (req, res) => {
  console.log(`New HOME GET request handled ${Date.now()}`)
  res.render('home.ejs')
});

server.get('/translations', (req, res) => {
  console.log(`New Translations GET request handled ${Date.now()}`)
  res.send('Translation object')
});

server.get('/about', (req, res) => {
  console.log(`New About GET request handled ${Date.now()}`)
  res.send('ABOUT')
});

server.get('/submit', (req, res) => {
  console.log(`New Submit GET request handled ${Date.now()}`)
  res.send('SUBMIT')
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`)
});
