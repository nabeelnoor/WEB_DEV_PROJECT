//you have to implement schema for Mongo here.Actually it is models
const mongoose = require('mongoose');
const validate = require( 'mongoose-validator' );

const secondValidator=require('validator'); 

const DeptSchema=mongoose.Schema({
    _id:{
        type:String,
        //required:true,
        trim:true
        //unique:true
    },
    DeptID:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    Name : {
        type:String,
        required:true
    }
});

module.exports=new mongoose.model('Dept',DeptSchema);