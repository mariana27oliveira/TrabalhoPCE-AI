const composition = require("../model/composition")
let CompositionSchema = require ("../model/composition")

module.exports.newComposition = async(composition) => {
    try {
        let composition = new CompositionSchema({composition})
        let response = await composition.save();
        console.log(response);
        return {Success: true, response};
    } catch (err) {
        console.log(err);
        return {Success: false, response: err};
    }
}