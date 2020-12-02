const express = require('express');
const server = express();
const ejs = require('ejs');


const PORT = 1337;

server.set('view-engine', ejs);
server.use('/assets', express.static('assets'));

server.get('/', (req, res) => {
  console.log(`HOME GET request`)
  res.render('home.ejs')
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
  res.json(translationValues)
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`)
});



const translationValues = {
  "software engineer": "stack overflow surfer",
  "junior developer": "basic googler",
  "senior developer": "expert googler",
  "lead developer": "lead googler",
  "energetic": "don't stop till you drop",
  "cutting edge technology": "do what everyone else is doing",
  "fast paced environment": "your job will be constant firefighting",
  "team player": "must not question authority",
  "minimal supervision": "you’ll be the one we blame when something goes wrong",
  "agile team": "we have daily standups",
  "market leader": "recently started making a profit",
  "rockstar developer": "you will work very long hours with impossible deadlines",
  "urgent need": "our other rockstar just left and no one understands the code",
  "dynamic environment": "our leadership keeps changing priorities",
  "self starter": "we have no process",
  "passionate": "perseveres through regular death marches"
}
