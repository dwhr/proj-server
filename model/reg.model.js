//import mongoose
var mongoose = require('mongoose');
//define schema
const regSchema = mongoose.Schema({
    name:String,
    phone:Number,
    email:String,
    password:String
})
// compile model
const registration = mongoose.model('registraion',regSchema);
module.exports=registration;