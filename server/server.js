const express = require('express');

const app = express();

const bodyParser = require('body-parser')

app.use(express.static('server/public'));

app.use(bodyParser.urlencoded({extended: true}));

let port = 5000;

app.listen(port, function() {
    console.log('the server is up on: ', port);
})

