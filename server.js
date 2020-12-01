const express = require('express');
const server = express();
const ejs = require('ejs');

const PORT = 1337;

// MIDDLEWARE is the code between the server.get and the res.render (Code in the middle)

// express.static() <== in built function that comes with express to serve up our static files and lets us avoid using "next" (Simplifys code)

server.set('view-engine', ejs);
server.use('/assets', express.static('assets'));

// 1. Is this normal ^ Serving my css like this
// 2. How should i be importing my javascript and jquery for event listeners (Input storage --> Mapping through string to find keys --> Output results)
// 3. I feel like serving my json object like this is bad (Can i do something like this without mongoDB or is it bad practice)
// 4. Should i just store input within the jquery event listener and then map through it?

server.get('/', (req, res) => {
  console.log(`HOME GET request`)
  res.render('home.ejs')
});

server.get('/about', (req, res) => {
  console.log(`About GET request`)
  res.send('ABOUT')
});

server.get('/submit', (req, res) => {
  console.log(`Submit GET request`)
  res.send('SUBMIT')
});

server.get('/results', (req, res) => {
  console.log(`results GET request`)
  res.json(translationValues)
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`)
});

const translationValues = {
  "Junior Developer": "Junior Googler",
  "Senior Developer": "Senior Googler",
  "Lead Googler": "Lead Googler",
  "Work on cutting edge technology": "Do what everyone else is doing",
  "A fast paced environment": "Your job will be constant firefighting",
  "Must be a team player": "Must not question authority",
  "Able to work with minimal supervision": "You’ll be the one we blame when something goes wrong",
  "An agile team": "We have daily standups",
  "A market leader": "Recently started making a profit",
  "Rockstar developer": "You will work very long hours with impossible deadlines",
  "We have an urgent need": "Our other rockstar just left and no one understands the code",
  "Dynamic environment": "Our leadership keeps changing priorities",
  "Self starter": "We have no process",
  "Passionate": "Perseveres through regular death marches"
}
