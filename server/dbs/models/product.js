import mongoose from 'mongoose'
const Schema = mongoose.Schema

const CategorySchema = new Schema({
	types  : Array,
	areas  : Array,
	city   : String
})

const Category = mongoose.model('Category',CategorySchema)

export default Category