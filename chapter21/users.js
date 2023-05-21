// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema( {
// 	_id : mongoose.Schema.Types.ObjectId(), 
// 	name: String, 
// 	email: String, 
// 	address: String
// });


// module.exports = mongoose.model('users',userSchema);

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
	_id: mongoose.Types.ObjectId,
	name: String, 
	email : String, 
	address : String
});


module.exports = mongoose.model('users', userSchema);

