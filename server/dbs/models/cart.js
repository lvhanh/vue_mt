import mongoose from 'mongoose'
const Schema = mongoose.Schema

const CartSchema = new Schema({
	cartNo : {
        type : String,
        required : true
    },
    price :{
        type : String,
        required : true
    },
    cartName : {
        type : String,
        required : true
    },
    username : {
        type : String,
        required : true
    },
    time : {
        type : String,
        required : true
    }
})

const Cart = mongoose.model('Cart',CartSchema)

export default Cart