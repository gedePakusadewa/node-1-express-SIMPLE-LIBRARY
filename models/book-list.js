const mongoose = require('mongoose');
const db = require('./database');

const bookListSchema = new mongoose.Schema({
	code: String,
	title: String,
	author: String,
	pages: String,
	year: String,
	rent_status:Boolean,
	path_img: String
});

bookList = mongoose.model('book_list_v2', bookListSchema);

module.exports = bookList;



