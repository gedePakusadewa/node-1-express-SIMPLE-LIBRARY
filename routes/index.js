const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
	console.log('/');
	res.render('home');
});

router.get('/home', (req, res) =>  {
	console.log('/home');
	res.render('home');
});

router.get('/about', function(req, res){
	console.log('/about');
	res.render('about');
});



module.exports = router
