const express = require('express');
const bodyParser = require('body-parser');
//const route
const db = require('./models/database');
const app = express();
const route = require('./routes/index');

app.set("views", "./views");
app.set("view engine", "ejs");

//app.use('/', route);
app.use(bodyParser.urlencoded({ extended : false }));
app.use(express.static('public'));
app.use(bodyParser.json());
app.use('/', route);

/*
app.use('/tes', function(req, res){
	console.log(req.query);
});

*/
var server = app.listen(3000, "127.0.0.1", function(){
	console.log("http://" + server.address().address + ":" + server.address().port);
});
