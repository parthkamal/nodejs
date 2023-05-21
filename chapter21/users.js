const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	_id: mongoose.Types.ObjectId,
	name: String,
	email:
	{
		type: String,
		unique: true
	},
	address: String
});


module.exports = mongoose.model('users', userSchema);

