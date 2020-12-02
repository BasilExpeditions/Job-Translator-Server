const express = require('express');
const server = express();
const ejs = require('ejs');


require('dotenv').config()

console.log(process.env.API_KEY)

const port = process.env.PORT || 1337;

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

server.listen(port, () => {
  console.log(`Server listening on port ${port}...`)
});



const translationValues = {
  "software engineer": "be a damn good stack overflow surfer",
  "software developer": "be a damn good stack overflow surfer",
  "junior developer": "theyre looking for a basic googler",
  "senior developer": "theyre looking for an expert googler",
  "lead developer": "theyre looking for a lead googler",
  "energetic": "don't stop till you drop",
  "cutting edge technology": "do what everyone else is doing",
  "fast paced environment": "your job will be constant firefighting",
  "team player": "must not question authority",
  "minimal supervision": "you’ll be the one we blame when something goes wrong",
  "agile": "we have daily standups",
  "market leader": "recently started making a profit",
  "rockstar developer": "you will work very long hours with impossible deadlines",
  "urgent need": "our other rockstar just left and no one understands the code",
  "dynamic environment": "our leadership keeps changing priorities",
  "self starter": "we have no process",
  "passionate": "perseveres through regular death marches"
}
