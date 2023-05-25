var express = require('express');
var router = express.Router();
var app = express();
const bodyParser = require('body-parser'); 
var CompositionController = require ('../controller/composition');
var LoginController = require('../controller/login')


module.exports = router;



// Set up middleware
router.use(bodyParser.json());


router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ success: false, info: 'Email and password are required.' });
  }

  let loginResponse = await LoginController.login(email, password);
  if (loginResponse.success) {
    res.status(200).json({ success: true, info: 'Login successful.' });
  } else {
    res.status(401).json({ success: false, info: 'Invalid email or password.' });
  }
});



  router.post('/signIn', async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) { return res.status(400).json({ success: false, info: 'Email and password are required.' });
  }

    let signInResponse = await LoginController.signIn(email, password);
      if(signInResponse.Success) { res.status(200).json({success: true, info: "New user registred."});
      }else{
        res.status(200).json({ success: false, info: "Could not had new user."});
    }
  });


  router.post("/newcomposition", async (req, res) => {
    let newCompositionResponse = await CompositionController.newComposition(req.body);
      if(newCompositionResponse.Success) { res.status(200).json({success: true, info: "Composition added successfully"});
      }else{
        res.status(200).json({ success: false, info: "Composition not added"});
    }
  })
  

app.use(router);

app.listen(8080, () => {
  console.log('Server started on port 8080');
});
