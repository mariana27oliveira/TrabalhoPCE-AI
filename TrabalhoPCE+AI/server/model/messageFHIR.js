var mongoose=require('mongoose');
var Schema = mongoose.Schema;

const { v4: uuidv4 } = require('uuid');

var MessageFHIRSchema =  new Schema({
    erh_id: {type:String},  
    fhir: {type: Schema.Types.Mixed, required: true}
}, {timestamps: true} )


module.exports = mongoose.model('fhir', MessageFHIRSchema)
