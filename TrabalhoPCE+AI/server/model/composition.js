var mongoose=require('mongoose');
var Schema = mongoose.Schema;

const { v4: uuidv4 } = require('uuid');

var CompositionSchema =  new Schema({
    composition_id: {type:String, unique:true, required:true, default:uuidv4}, 
    composition: {type: Schema.Types.Mixed, required: true}
}, {timestamps: true} )


module.exports = mongoose.model('composition', CompositionSchema)
