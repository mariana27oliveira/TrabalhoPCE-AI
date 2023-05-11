var express = require('express');
var router = express.Router();
var CompositionController = require ('../controller/composition');


router.post("/newcomposition", async (req, res) => {
  let newCompositionResponse = await CompositionController.newComposition(req.body.data);
    if(!newCompositionResponse.success) throw "Erro a adicionar nova composition";
    else
      res.status(200).json({ success: true, info: "Composition added successfully", data: newCompositionResponse});
  });

module.exports = router;
