import mongoose from 'mongoose'
const Schema = mongoose.Schema

const ProvinceSchema = new Schema({
	id 		: String,
	value : String
})

const Province = mongoose.model('Province',ProvinceSchema)

export default Province