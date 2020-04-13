import mongoose from 'mongoose'
const Schema = mongoose.Schema

const OrderSchema = new Schema({
	orderNo : {
        type : String,
        required : true
	},
	count : {
		type : Number,
		required : true
	},
    total :{
        type : Number,
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
	},
	imgs : {
		type : Array
	},
	status : {
		type : Number,
		required : true
	}
})

const Order = mongoose.model('Order',OrderSchema)

export default Order