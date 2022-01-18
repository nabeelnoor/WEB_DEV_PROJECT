//you have to implement schema for Mongo here.Actually it is models
const mongoose = require('mongoose');
const validate = require( 'mongoose-validator' );
//import { isEmail } from 'mongoose-validator';
const secondValidator=require('validator'); 

const DoctorSchema=mongoose.Schema({
    _id:{
        type:String,
        //required:true,
        trim:true,
        lowercase:true,
        //unique:true,
        validate: [secondValidator.isEmail,'invalid Email']
    },
    DocID:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        unique:true,
        validate: [secondValidator.isEmail,'invalid Email']
    },
    Qualification : {
        type:String,
        required:true
    },
    Certificate : {
        type:String,
        //required:true,
        default:"None"
    },
    Experience:{
        type: String,
        default:"-"
        //lenght check
    },
    Speciality:{
        type:String,
        required:true,
        default:"None"
        //CNIC length check
    },
    ActiveDay:{
        type:String,
        required:true,
        default:"1,2"
    },
    Timing:{
        type:String,
        required:true,
        default:8
    },
    AppSlot:{
        type:Number,
        default:6
    },
    EmpID:{
        type:String,
        required:true
    },
    CheckupFee:{
        type:Number,
        required:true,
        default:0
    }

});

module.exports=new mongoose.model('Doctor',DoctorSchema);