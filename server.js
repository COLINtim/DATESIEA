// server.js
// where your node app starts

// init project

var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var app = express();
var fs = require('fs');
// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

app.use(express.json());

app.use('/public', express.static(__dirname + '/public'));  
app.use(express.static(__dirname + '/public')); 

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/login.html');
});
// http://expressjs.com/en/starter/basic-routing.html
app.get('/gallery', function(request, response) {
  response.sendFile(__dirname + '/views/DATESIEA.html');
});

app.get('/profile', function(request, response) {
  response.sendFile(__dirname + '/views/DATESIEAPROFILE.html');
});
app.get('/user.txt', function(request, response) {
  response.sendFile(__dirname + '/public/user.txt');
});

app.get('/inscription', function(request, response) {
  response.sendFile(__dirname + '/views/inscription.html');
});
app.get('/users.json', function(request, response) {
  response.sendFile(__dirname + '/public/users.json');
});


app.post('/users.json', function(request, response) {
 response.sendFile(__dirname + '/public/user.json');
});

app.post('/user.txt', function(request, response) {
  
  var body = '';
  var filePath = __dirname + '/public/user.txt';
  request.on('data', function(data) {
      body += data;
  });
  
  request.on('end', function (){
      fs.writeFile(filePath, body, function() {
          response.sendFile(__dirname + '/public/user.txt');
      });
  });
  
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
