let CompositionSchema = require ("../model/composition")

module.exports.newComposition = async(ehr_id, composition) => {
    try {
        let new_comp = new CompositionSchema({ehr_id, composition})
        let response = await new_comp.save();
        console.log(response);
        return {Success: true, response};
    } catch (err) {
        console.log(err);
        return {Success: false, response: err};
    }
}