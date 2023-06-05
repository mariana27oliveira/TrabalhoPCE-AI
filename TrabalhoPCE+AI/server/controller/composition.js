let CompositionSchema = require ("../model/composition")

module.exports.newComposition = async (composition) => {
  try {
    const compositionValues = composition.values;
    Object.keys(compositionValues).forEach((key) => {
      if (typeof compositionValues[key] === "string") {
        try {
          const blocksData = JSON.parse(compositionValues[key]);
          if (Array.isArray(blocksData.blocks) && blocksData.blocks.length > 0) {
            compositionValues[key] = blocksData.blocks[0].text;
          }
        } catch (error) {
        }
      } else if (Array.isArray(compositionValues[key]) && compositionValues[key].length > 0) {
        try {
          const blocksData = JSON.parse(compositionValues[key][0].value);
          if (Array.isArray(blocksData.blocks) && blocksData.blocks.length > 0) {
            compositionValues[key][0].value = blocksData.blocks[0].text;
          }
        } catch (error) {
        }
      }
    });
    const newComp = new CompositionSchema({ composition });
    const response = await newComp.save();
    return { Success: true, response };
  } catch (err) {
    console.error(err);
    return { Success: false, response: err };
  }
};

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


module.exports.deleteComposition = async (id) => {
  try {
    let json = await CompositionSchema.deleteOne({ composition_id: id });
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
