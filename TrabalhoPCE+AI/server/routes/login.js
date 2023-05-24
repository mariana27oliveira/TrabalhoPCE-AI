var express = require('express');
var router = express.Router();
var app = express();
const bodyParser = require('body-parser'); 
var CompositionController = require ('../controller/composition');


module.exports = router;



// Set up middleware
router.use(bodyParser.json());


router.post('/login', (req, res) => {
    const { email, password } = req.body;
  
    // TODO: check if email and password are valid
    if (!email || !password) {
      res.status(400);
    }
  
    // TODO: retrieve user from database based on email and password
    const user = users.find(user => user.email === email && user.password === password);
    if (!user) {
      res.status(401);
    }
  
    res.send({message: 'Login successful'});
  });
  
  // Mock user database
  const users = [
    {
      //id: 1,
      email: 'john@example.com',
      password: 'password123'
    },
    {
      //id: 2,
      email: 'jane@example.com',
      password: 'letmein'
    }
  ];

  router.post("/newcomposition", async (req, res) => {
    console.log(req.body)
    let newCompositionResponse = await CompositionController.newComposition(req.body.data);
    console.log('newCompositionResponse',newCompositionResponse)
      if(newCompositionResponse.Success) { res.status(200).json({success: true, info: "Composition added successfully"});
      }else{
        res.status(200).json({ success: false, info: "Composition not added"});
    }
  })
  

app.use(router);

app.listen(8080, () => {
  console.log('Server started on port 8080');
});
