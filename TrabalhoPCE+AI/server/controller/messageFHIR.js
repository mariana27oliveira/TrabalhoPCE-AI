const MessageFHIRSchema = require("../model/messageFHIR");

module.exports.newMessageFHIR = async (fhirData) => {
  try {
    let fhir = new MessageFHIRSchema({ fhir: fhirData }); 
    let response = await fhir.save();
    console.log(response);
    return { Success: true, response };
  } catch (err) {
    console.log(err);
    return { Success: false, response: err };
  }
};
