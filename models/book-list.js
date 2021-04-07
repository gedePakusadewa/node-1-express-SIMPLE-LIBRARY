const mongoose = require('mongoose');
const db = require('./database');

const bookListSchema = new mongoose.Schema({
	title: String,
	author: String,
	pages: String,
	year: String,
	rest_status:Boolean
});

bookList = mongoose.model('book_list', bookListSchema);

module.exports = bookList;



