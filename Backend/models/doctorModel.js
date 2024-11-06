import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
    name: {type: String, required:true},
    email: {type: String, required:true, unique:true},
    password: {type: String, required:true},
    image: {type: String, required:true},
    speciality: {type: String, required:true},
    degree: {type: String, required:true},
    experience: {type: String, required:true},
    about: {type: String, required:true},
    available: {type: Boolean, default:true},
    fees: {type: Number, required:true},
    address: {type: Object, required:true},
    date: {type: Number, required:true},
    slots_booked: {type: Object, default:{}},
}, {minimize:false})    //this allows slots_booked to be empty object


const doctorModel = mongoose.models.doctor || mongoose.model('doctor', doctorSchema)
                        //so that we dont create model mutliple time

export default doctorModel