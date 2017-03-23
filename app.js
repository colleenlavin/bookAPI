var express = require('Express');
var app = express();
var router = require('./routes');
var db = require('./models/db').db;
var author =  require('./models/db').Author;
var book = require('./models/db').Book;


app.use('/', router);

app.listen(3000, function(){
    console.log("Server listening on port 3000");
} );

