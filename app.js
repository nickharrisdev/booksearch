

const express = require('express');
const app = express();
const path = require('path');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.use(express.static(path.join(__dirname, "app/books.js")));

app.use(express.static(path.join(__dirname, "css/app.css")));

app.listen(process.env.PORT || 4000, function(){
    console.log('Your node js server is running');
});
