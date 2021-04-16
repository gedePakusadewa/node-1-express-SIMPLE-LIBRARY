const mongoose = require('mongoose');
const db = require('./database');

const bookRentListSchema = new mongoose.Schema({
	code:String,
	users:String,
	duration:String
});

bookRentList = mongoose.model('book_rent_list', bookRentListSchema);

module.exports = bookRentList;
