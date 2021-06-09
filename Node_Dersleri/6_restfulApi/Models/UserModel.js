const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	name: {
		type: String,
		required: true,
		trim: true,
		minlength: 3,
		maxlength: 30
	},userName: {
		type: String,
		required:true,
		unique:true,
		trim:true,
		lowcase:true,
		minlength:3,
		maxlength: 30
	},email: {
		type: String,
		required:true,
		unique:true,
		trim:true,
		lowcase:true
	},password: {
		type: String,
		required:true,
		trim:true,
		minlength:6,
		maxlength: 30
	}

},{collection:"users", timestamps:true});

const User =mongoose.model("User", UserSchema);

module.exports =User;