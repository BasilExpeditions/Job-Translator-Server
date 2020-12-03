const express = require('express');
const server = express();
const ejs = require('ejs');
const dotenv = require('dotenv').config()
const values = require('./translationValues')

const port = process.env.PORT || 1337;

server.set('view-engine', ejs);
server.use('/assets', express.static('assets'));

server.get('/', (req, res) => {
  console.log(`HOME GET request`)
  res.render('home.ejs', dotenv.parsed)
});

server.get('/about', (req, res) => {
  console.log(`About GET request`)
  res.render('about.ejs')
});

server.get('/submit', (req, res) => {
  console.log(`Submit GET request`)
  res.render('submit.ejs')
});

server.get('/translations', (req, res) => {
  console.log(`Submit GET request`)
  res.render('translations.ejs')
});

server.get('/results', (req, res) => {
  console.log(`results GET request`)
  res.json(values.translationValues)
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}...`)
});
