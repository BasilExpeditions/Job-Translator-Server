# Job-Translator

## To setup this project please run npm install followed by npm run start.

#### TechStack:
- Node
- Express

#### Dependencies being used are:
- Express
- Ejs

#### Dev Dependencies
- Nodemon

## Idea:

This project was just a fun little idea to use in practice some of the technologies that i've learned over the course taught by Joel Turnbell, An exceptionally skilled Teacher, Technology Enthusiast & Engineer.

## Objective:

The objective of this application is to be able to copy an entire "Software Engineer" specific job board application information and paste it within this job translator application to find the realsitic result the company is looking for.

This was a fun little project inspired by an old friend and a small community on the internet, the intention of this application is just for a laugh.

## Adzuna API

I was able to integrate the Adzuna API thankfully without much trouble, there was issues format of the data when retrieved but with a little handy regex i was able to remove any of the weird issues such as:
Data/Job descriptions were returning groups of text with html tags still within them... Very strange...

I've limited the API callout search to 20 random jobs within the Australian region, I also added a random description selector with so it would sample 1 of the 20 returned descriptions on each buttonClick.


## Features
- Paste in job description text & click translate to search for keywords and phrases
- Currently shows all existing phrases & terms in the translations page
- Mobile friendly/Responsive design
- The ability to submit a phrase and translation
-

## Lighthouse Audit

I tried my best to optimise the application to the best of my current knowledge with the time frame i had for this project. This is something i really enjoyed doing and tweaking to better develop the application.

![Alt text](audit.png? "SEO screenshot")

## Secret Easter Egg:

There is a secret easter egg within this application, Try your best to figure it out!
