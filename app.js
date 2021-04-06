const express = require('express');
const bodyParser = require('body-parser');
//const route
const db = require('./models/database');
const app = express();

app.set("views", "./views");
app.set("view-engine", "ejs");

var server = app.listen(3000, "127.0.0.1", function(){
	console.log("http://" + server.address().address + ":" + server.address().port);
});
