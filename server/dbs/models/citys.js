import mongoose from 'mongoose'
const Schema = mongoose.Schema

const CitySchema = new Schema({
	id : 'string',
	province : 'string',
	city    : 'string'
})

const City = mongoose.model('City',CitySchema)

export default City