var express = require('express'); 
var app = express(); 
var server = require('http').Server(app); 


app.use(express.static('public')); 

app.get('/hello', function(req, res) {
  res.status(200).send("Hello World!");
}); 

server.listen(8080, function() { 
  console.log("Servidor ejecutando en http://localhost:8080"); 
});