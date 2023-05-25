var mongoose=require('mongoose');
var Schema = mongoose.Schema;

var LoginSchema =  new Schema({
    email: {type:String, unique:true, required:true}, 
    password: {type: String, required: true}
}, {timestamps: true} )


module.exports = mongoose.model('login', LoginSchema)