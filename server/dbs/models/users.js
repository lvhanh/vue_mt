import mongoose from 'mongoose'
const Schema = mongoose.Schema

const UserSchema = new Schema({
	username : 'string',
	password : 'string',
	email    : 'string'
})

const User = mongoose.model('User',UserSchema)

export default User