const mongoose = require('mongoose');
const bookList = require('../models/book-list');
const db = require('../models/database');

module.exports = {
	getBookListView:function(req, res){
		console.log('getBookListView');
		bookList.find({})
		.then(result => {
			res.send('book-list', {result : result});
		})
		.catch( err => {
			console.log(err);
		})
	},

	setDataBookList:function(req, res){
		const dat = new bookList({
			code: "q81isp",
			title: "Command Them Now",
			author: "Robert Ting Tong",
			pages: "90",
			year: "2020",
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
	}

};
