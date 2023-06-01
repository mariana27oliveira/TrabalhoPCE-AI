let CompositionSchema = require ("../model/composition")

module.exports.newComposition = async(composition) => {
    try {
        let new_comp = new CompositionSchema({composition})
        let response = await new_comp.save();
        return {Success: true, response};
    } catch (err) {
        console.log(err);
        return {Success: false, response: err};
    }
}
module.exports.listCompositions = async () => {
    try {
        let lista = await CompositionSchema.find();
        console.log(lista);
        return { success: true, response: lista };
    } catch (err) {
        console.log(err);
        return { success: false, response: err };
    }
}