//you have to implement schema for Mongo here.Actually it is models
const mongoose = require('mongoose');
const validate = require( 'mongoose-validator' );
//import { isEmail } from 'mongoose-validator';
const secondValidator=require('validator'); 

const EmpSchema=mongoose.Schema({
    _id:{
        type:String,
        //required:true,
        trim:true,
        lowercase:true,
        //unique:true,
        validate: [secondValidator.isEmail,'invalid Email']
    },
    EmpID:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        unique:true,
        validate: [secondValidator.isEmail,'invalid Email']
    },
    Name : {
        type:String,
        required:true
    },
    Gender:{
        type: String,
        enum:['M','F','N']
    },
    Age : {
        type:Number,
        //required:true,
        default:0
    },
    Contact:{
        type: String,
        default:"-"
        //lenght check
    },
    CNIC:{
        type:String,
        required:true,
        default:'-'
        //CNIC length check
    },
    Job:{
        type:String,
        required:true,
        default:"Nil"
    },
    Salary:{
        type:Number,
        required:true,
        default:0
    },
    Address:{
        type:String,
        default:'-'
    },
    DeptID:{
        type:String,
        required:true,
        default:"M1"
    },
    Speciality:{
        type:String,
        default:"-"
    },
    Password:{
        type:String,
        required:true
    },
    DOB:{
        type:String
    }

});

module.exports=new mongoose.model('Emp',EmpSchema);