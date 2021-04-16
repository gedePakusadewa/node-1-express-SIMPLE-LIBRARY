const mongoose = require('mongoose');
const bookList = require('../models/book-list');
const db = require('../models/database');
const bookRentList = require('../models/rent-book-list');

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

	setDataBookList:function(req, res){
		const dat = new bookList({
			code: "gt10de",
			title: "Keyboard Is Mouse Owning Rig",
			author: "Orale Dillale",
			pages: "756",
			year: "2017",
			rent_status: false,
			path_img: "/cover/gt10de.jpg"

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
			//console.log(result);	
			res.render('book-detail', {result: result})
		})
		.catch(err =>{
			console.log(err);
		});
		
		//var tes = req.params;
		//console.log(tes['code']);
			
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
		const dat = new bookRentList({
			
		});
	}
};
