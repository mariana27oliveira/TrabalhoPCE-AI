const fhir = require("../model/messageFHIR")
let MessageFHIRSchema = require ("../model/messageFHIR")

module.exports.newMessageFHIR = async(fhir) => {
    try {
        let fhir = new MessageFHIRSchema({fhir})
        let response = await fhir.save();
        console.log(response);
        return {Success: true, response};
    } catch (err) {
        console.log(err);
        return {Success: false, response: err};
    }
}