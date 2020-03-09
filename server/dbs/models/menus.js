import mongoose from 'mongoose'
const Schema = mongoose.Schema

const MenuSchema = new Schema({
	menu  : Array
})

const Menu = mongoose.model('Menu',MenuSchema)

export default Menu