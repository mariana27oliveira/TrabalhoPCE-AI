var mongoose=require('mongoose');
var Schema = mongoose.Schema;

const { v4: uuidv4 } = require('uuid');

var CompositionSchema =  new Schema({
    erh_id: {type:String, unique:true, require:true, default:uuidv4}, 
    composition: {type: Schema.Types.Mixed}
}, {timestamps: true} )


module.exports = mongoose.model('composition', CompositionSchema)
// modelo de mongoose ( nome do modelo, modelo em si )