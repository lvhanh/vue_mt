import mongoose from 'mongoose'
const Schema = mongoose.Schema

const PoiSchema = new Schema({
	name     : String,
    province : String,
    city     : String,
    county   : String,
    areaCode : String,
    tel      : String,
    area     : String,
    add      : String,
    type     : String,
    module   : String,
    longtide : String,
    latitude : String
})

const Poi = mongoose.model('Poi',PoiSchema)

export default Poi