const express = require('express');
const app = express();
const path = require('path');
const port = 3030;
const gif = path.join(__dirname, '/cobrakai.gif');
const url = path.join(__dirname, '/index.html');
const img = path.join(__dirname, '/water.jpg');
console.log(url);



app.get('/', function(req, res) {
    res.sendFile(url)
})

app.get('/saludo', function(req, res) {
    res.send('Holaaaaa!')
})

app.get('/gif', function(req, res) {
    res.sendFile(gif)
})

app.get('/img', function(req, res) {
    res.sendFile(img)
})



app.listen(port, function() {
    console.log(`el servidor esta corriendo en el puerto ${port}`);
})