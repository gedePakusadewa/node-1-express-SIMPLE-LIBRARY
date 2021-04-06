const mongoose = require('mongoose');
var db = 'mongodb://127.0.0.1:27017/libray-one';
class Database{
	constructor(){
		this._connect();
	}

	_connect(){
		mongoose.connect(db)
		.then(() => {
			console.log('Database Connected ' + db);	
		})
		.catch(err =>{
			console.error('Database Connection Error');
		});

	}

}

module.exports = new Database();
