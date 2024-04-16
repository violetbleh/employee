const mongoose = require('mongoose');

const schema = mongoose.Schema({
name:String,
position:String,
location:String,
salary:Number
})


const postModel=mongoose.model('post',schema);
module.exports=postModel;