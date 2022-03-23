var express=require('express');
var mongoose=require('mongoose');
var Schema = mongoose.Schema
mongoose.connect("mongodb://localhost:27017/cmscart?retryWrites=true&w=majority",{ useUnifiedTopology: true, useNewUrlParser: true  }).then(()=>{
    console.log("Connection created")
}).catch((err)=>{console.log()})

// Page schema 
const PageSchema=new Schema({

        title:{
            type:String,
            required:true,
            trim: true
        },
        slug:{
            type:String,
            trim: true
        }, 
         content:{
            type:String,
            required:true,
            trim: true
        },
        sorting:{
            type:Number,
            trim: true,
            default: 100
        }

});
var Page=mongoose.exports=mongoose.model('Page',PageSchema);
module.exports = PageSchema;

// 