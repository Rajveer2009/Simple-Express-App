//importing Libraries
const express = require('express');
const app = express();

//listening for Requests and giving back Response
app.get('/' , (req, res) => {
    console.log('request was made: ' + req.url);
    res.send({ data: 'Hello'});
});
app.get('/name' , (req, res) => {
    console.log('request was made: ' + req.url);
    res.send({ data: 'Rajveer'});
});
app.get('/age' , (req, res) => {
    console.log('request was made: ' + req.url);
    res.send({ data: 22});
});

//serving it to the localhost port:8080
app.listen(8080);