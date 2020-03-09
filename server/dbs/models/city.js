import mongoose from 'mongoose'
const Schema = mongoose.Schema

const CitySchema = new Schema({
	id 	  : String,
	value : Array
})

const City = mongoose.model('City',CitySchema)

export default City