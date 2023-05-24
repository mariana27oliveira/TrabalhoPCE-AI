let CompositionSchema = require ("../model/composition")

module.exports.newComposition = async(composition) => {
    try {
        let new_comp = new CompositionSchema({composition})
        console.log('sou eu 2',new_comp)

        let response = await new_comp.save();
        console.log('sou resposta',response);
        return {Success: true, response};
    } catch (err) {
        console.log(err);
        return {Success: false, response: err};
    }
}