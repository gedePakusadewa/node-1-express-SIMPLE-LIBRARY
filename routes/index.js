const express = require('express');
const controller = require('../controllers/PublicController');
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

router.get('/book-list', controller.getBookListView);

router.get('/add', controller.setDataBookList);

router.get('/book-detail/:code', controller.getViewBookDetail);

router.get('/book-rent/:code', controller.getViewBookRent);

router.post('/rent-book-save/:code', controller.addBookRent);

router.get('/delete-book-rent-data/:code', controller.setDeleteRentBookData);

module.exports = router;
