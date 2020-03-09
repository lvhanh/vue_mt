import mongoose from 'mongoose'
const Schema = mongoose.Schema

const UserSchema = new Schema({
	username : String,
	password : String,
	email    : String
})

const User = mongoose.model('User',UserSchema)

export default User