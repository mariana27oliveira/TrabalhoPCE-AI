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

module.exports.listFhirs = async () => {
  try {
      let lista = await MessageFHIRSchema.find();
      console.log(lista);
      return { success: true, response: lista };
  } catch (err) {
      console.log(err);
      return { success: false, response: err };
  }
}

module.exports.getJsonById = async (id) => {
  try {
    let json = await MessageFHIRSchema.findOne({ erh_id: id }, { fhir: 1 });
    if (!json) {
      return { success: false, response: 'No JSON found for the given ehr_id' };
    }
    console.log(json);
    return { success: true, response: json.fhir };
  } catch (err) {
    console.log(err);
    return { success: false, response: err };
  }
};

module.exports.deleteMensagem = async (id) => {
  try {
    let json = await MessageFHIRSchema.deleteOne({ erh_id: id });
    if (!json.deletedCount) {
      return { success: false, response: 'No JSON found for the given ehr_id' };
    }
    console.log(json);
    return { success: true };
  } catch (err) {
    console.log(err);
    return { success: false, response: err };
  }
};

