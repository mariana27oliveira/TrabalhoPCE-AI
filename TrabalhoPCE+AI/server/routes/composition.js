var express = require('express');
var router = express.Router();
var CompositionController = require ('../controller/composition');

router.post("/newcomposition", async (req, res) => {
  console.log(req)
  let newCompositionResponse = await CompositionController.newComposition(req.body.data);
    if(newCompositionResponse.success) { res.status(200).json({success: true, info: "Composition added successfully"});
    }else{
      res.status(200).json({ success: false, info: "Composition not added"});
  }
})



module.exports = router;
