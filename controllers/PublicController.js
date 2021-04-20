const mongoose = require('mongoose');
const bookList = require('../models/book-list');
const db = require('../models/database');
const bookRentList = require('../models/rented-book-list');

module.exports = {

	//only read all data from model 
	getBookListView:function(req, res){
		//console.log('getBookListView');
		bookList.find()
		.then(result => {
			res.render('book-list', {result:result});
		})
		.catch( err => {
			console.log(err);
		})
	},

	//add random data to collections
	setDataBookList:function(req, res){
		const dat = new bookList({
			code: "q81isp",
			title: "This Is Programmer!!!!",
			author: "Sam Not Bed Thin",
			pages: "23",
			year: "2021",
			rent_status: false,
			path_img: "/cover/q81isp.jpg"

		});

		dat.save(dat)
		.then(result =>{
			console.log(result);	
		})
		.catch(err => {
			console.log(err);
		});
	},

	getViewBookDetail:function(req, res){
		var code = req.params;	
		bookList.find({'code':code['code']})
		.then(result => {
			res.status(200).render('book-detail', {result: result})
		})
		.catch(err =>{
			console.log(err);
		});			
	},

	getViewBookRent:function(req, res){
		var code = req.params;
		bookList.find({'code' : code['code']})
		.then(result => {
			res.render('rent-book', {result: result})
		})
		.catch(err =>{
			console.log(err);
		});
	},

	addBookRent:function(req, res){	
		var codeBook = req.params;
		const dat = new bookRentList({
			code : codeBook['code'],
			users : 'delta1',
			duration: req.body.borrowDuration
		});
		
		module.exports.setStatusRentBook(codeBook['code'], true);

		dat.save(dat)
		.then(result => {
			module.exports.getBookListView(req, res);
			//this.getBookListView(req, res);
		})
		.catch(err => {
			console.log(err);
		});
	},

	setStatusRentBook:function(codeBook = "", statusRent){
		bookList.update({code : codeBook}, {rent_status : statusRent})
		.then(result =>{
			console.log(result);
		})
		.catch(err => {
			console.log(err);
		});
	},

	setDeleteRentBookData:function(req, res){
		var code = req.params;
		bookRentList.deleteOne({code : code['code']})
		.then(result => {
			console.log(result);
			module.exports.setStatusRentBook(code['code'], false);
			module.exports.getBookListView(req, res);
		})
		.catch(err => {
			console.log(err);
		});
	}
};
