//you have to implement schema for Mongo here.Actually it is models
const mongoose = require('mongoose');
const validate = require( 'mongoose-validator' );
//import { isEmail } from 'mongoose-validator';
const secondValidator=require('validator'); 

const App_LogSchema=mongoose.Schema({
    _id:{
        type:Number,
        //required:true,
        // trim:true,
        // lowercase:true,
        //unique:true,
    },
    AppID:{
        type:Number,
        // required:true,
        // trim:true,
        // lowercase:true,
        unique:true,
        required:true
        // validate: [secondValidator.isEmail,'invalid Email']
    },
    Time : {
        type:String,
        required:true
    },
    Date:{
        type:String,
        required:true
    },
    PatID:{
        type: String,
        required:true
    },
    DocID : {
        type:String,
        required:true,
    },
    Status:{
        type: Boolean,
        default:true
        //lenght check
    },
    FeeBalance:{
        type:Number,
        default:500
        //CNIC length check
    },
    Symptoms:{
        type:String,
        default:"Nil"
    }

});

module.exports=new mongoose.model('App_Log',App_LogSchema);