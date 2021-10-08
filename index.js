//---------------------------------------------------------------------------------------------
//Course: ITEC4012 Web Application Framework
//Assignment: Assignment 1: Node
//Student Name: Carly Strathearn
//---------------------------------------------------------------------------------------------

//Requiring the 'express' package by its name. Using 'express' to make a server and a small API.
const express = require('express');

//This is how we start using 'express'. We are calling it as a function here.
const app = express();

//Specifying a port here to listen on localhost:9000 
const port = 9000;

//Creating a main API route to return some information about Assignment 1. 
app.get('/', (req, res) => {
    res.send("ITEC4012 Web Application Frameworks | Assignment 1: Node | Carly Strathearn");
});

//Creating the first API route, this one returns 10 facts about me. 
app.get('/api/Facts-About-Me', (req, res) => {

    //Defining 10 facts about me.
    const factsAboutMe = ["1. My favourite season is the Fall", "2. My favourite holiday is Halloween", "3. My favourite movie genre is horror", "4. My favourite hobby is making rugs", "5. I have two cats; Tinkerbell and Thomas", "6. My favourite food is sushi", "7. I want to travel to Tokyo someday", "8. My favourite colour is pink", "9. My last played song on spotify is Seasons by Mozzy", "10. My favourite TV show is Black Mirror"];
    
    //Returning the 10 facts about me as strings.
    res.send(JSON.stringify(factsAboutMe));
});

//Here we are running the 'express' server on the port that we specified above. 
app.listen(port, () => {
    console.log("Listening on port", port);
});