var express = require('express');
var router = express.Router();
var app = express();
const bodyParser = require('body-parser'); 
var CompositionController = require ('../controller/composition');
var LoginController = require('../controller/login')
var messageFHIRController = require ('../controller/messageFHIR');


module.exports = router;

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

  if (newCompositionResponse.Success) {
    const subs = [
      { searchValue: 'data_atual', replaceValue: newCompositionResponse.response?.updatedAt },
      { searchValue: 'id_composition', replaceValue: newCompositionResponse.response?.composition_id },
      { searchValue: 'items.0.2.items.0.items.0.value', replaceValue: newCompositionResponse.response?.composition.values?.['items.0.2.items.0.items.0.value'] ?? '' },
      { searchValue: 'items.0.2.items.0.items.1.value.text', replaceValue: newCompositionResponse.response?.composition.values?.['items.0.2.items.0.items.1.value']?.text ?? '' },
      { searchValue: 'items.0.2.items.0.items.2.value', replaceValue: newCompositionResponse.response?.composition.values?.['items.0.2.items.0.items.2.value'] ?? '' },
      { searchValue: 'items.0.2.items.0.items.3.items.0.value.0.value', replaceValue: newCompositionResponse.response?.composition.values?.['items.0.2.items.0.items.3.items.0.value']?.[0]?.value ?? '' },
      { searchValue: 'items.0.3.items.0.value.code', replaceValue: newCompositionResponse.response?.composition.values?.['items.0.3.items.0.value']?.code?.replace(/local_terms::/g, "") ?? '' },
      { searchValue: 'items.0.3.items.0.value.text', replaceValue: newCompositionResponse.response?.composition.values?.['items.0.3.items.0.value']?.text ?? '' },
      { searchValue: 'items.0.3.items.1.value.code', replaceValue: newCompositionResponse.response?.composition.values?.['items.0.3.items.1.value']?.code?.replace(/local_terms::/g, "") ?? '' },
      { searchValue: 'items.0.3.items.1.value.text', replaceValue: newCompositionResponse.response?.composition.values?.['items.0.3.items.1.value']?.text ?? '' },
      { searchValue: 'items.0.3.items.2.value.0.text', replaceValue: newCompositionResponse.response?.composition.values?.['items.0.3.items.2.value']?.[0]?.code?.replace(/local_terms::/g, "") ?? '' },
      { searchValue: 'items.0.3.items.2.value.0.code', replaceValue: newCompositionResponse.response?.composition.values?.['items.0.3.items.2.value']?.[0]?.text ?? '' },
      { searchValue: 'items.0.3.items.3.items.0.value.0.value', replaceValue: newCompositionResponse.response?.composition.values?.['items.0.3.items.3.items.0.value']?.[0]?.value ?? '' },
      { searchValue: 'items.0.3.items.3.items.1.value', replaceValue: newCompositionResponse.response?.composition.values?.['items.0.3.items.3.items.1.value'] ?? '' },
      { searchValue: 'items.0.3.items.4.items.0.value', replaceValue: newCompositionResponse.response?.composition.values?.['items.0.3.items.4.items.0.value'] ?? '' },
      { searchValue: 'items.0.3.items.4.items.1.value', replaceValue: newCompositionResponse.response?.composition.values?.['items.0.3.items.4.items.1.value'] ?? '' },
      { searchValue: 'items.0.3.items.5.value.0.value', replaceValue: newCompositionResponse.response?.composition.values?.['items.0.3.items.5.value']?.[0]?.value ?? '' },
      { searchValue: 'items.0.4.items.1.items.0.value.code', replaceValue: newCompositionResponse.response?.composition.values?.['items.0.4.items.1.items.0.value']?.code ?? '' },
      { searchValue: 'items.0.4.items.1.items.0.value.text', replaceValue: newCompositionResponse.response?.composition.values?.['items.0.4.items.1.items.0.value']?.text ?? '' },
      { searchValue: 'items.0.4.items.1.items.1.value.code', replaceValue: newCompositionResponse.response?.composition.values?.['items.0.4.items.1.items.1.value']?.code ?? '' },
      { searchValue: 'items.0.4.items.1.items.1.value.text', replaceValue: newCompositionResponse.response?.composition.values?.['items.0.4.items.1.items.1.value']?.text ?? '' },
      { searchValue: 'items.0.4.items.1.items.2.value', replaceValue: newCompositionResponse.response?.composition.values?.['items.0.4.items.1.items.2.value'] ?? '' },
      { searchValue: 'items.0.4.items.1.items.3.value', replaceValue: newCompositionResponse.response?.composition.values?.['items.0.4.items.1.items.3.value'] ?? '' },
      { searchValue: 'items.0.4.items.1.items.4.value', replaceValue: newCompositionResponse.response?.composition.values?.['items.0.4.items.1.items.4.value'] ?? '' },
      { searchValue: 'items.0.5.items.0.items.1.value.code', replaceValue: newCompositionResponse.response?.composition.values?.['items.0.5.items.0.items.1.value']?.code?.replace(/local_terms::/g, "") ?? '' },
      { searchValue: 'items.0.5.items.0.items.1.value.text', replaceValue: newCompositionResponse.response?.composition.values?.['items.0.5.items.0.items.1.value']?.text ?? '' },
      { searchValue: 'items.0.5.items.2.items.0.value', replaceValue: newCompositionResponse.response?.composition.values?.['items.0.5.items.2.items.0.value'] ?? '' },
      { searchValue: 'items.0.5.items.2.items.1.value', replaceValue: newCompositionResponse.response?.composition.values?.['items.0.5.items.2.items.1.value'] ?? '' },
    ];
    
      
    let transformedFhir = transformToFhir(subs);
    let id = newCompositionResponse.response.composition_id
    let newMessageFHIRResponse = await messageFHIRController.newMessageFHIR(id, transformedFhir);

    if (newMessageFHIRResponse.Success) {
      res.status(200).json({ success: true, info: "Composition and FHIR added successfully" });
    } else {
      res.status(200).json({ success: false, info: "FHIR not added" });
    }
  } else {
    res.status(200).json({ success: false, info: "Composition not added" });
  }
});

function iterate(obj, subs) {
  for (let key in obj) {
    if (typeof obj[key] === 'object') {
      if (Array.isArray(obj[key])) {
        for (let item of obj[key]) {
          iterate(item, subs);
        }
      } else {
        iterate(obj[key], subs);
      }
    } else {
      for (let sub of subs) {
        if (obj[key] === sub.searchValue) {
          obj[key] = sub.replaceValue;
        }
      }
    }
  }
}

function transformToFhir(subs) {
  const fhir_message = require('../fhir.json');
  var fhir = JSON.parse(JSON.stringify(fhir_message));
  iterate(fhir, subs);
  return fhir;
}
  
router.post("/listfhirs", async (req, res) => {
  let listFhirsResponse = await messageFHIRController.listFhirs();
  console.log(listFhirsResponse)
  if(!listFhirsResponse.success) throw "Erro a listar mensagens Fhir";
  else
    res.status(200).json({ success: true, info: "List retrieved successfully", data: listFhirsResponse});
    
  });

router.get("/mensagem/:id", async (req, res) => {
  identificador= req.params.id;
  let jsonByIdResponse = await messageFHIRController.getJsonById(identificador);
  if(!jsonByIdResponse.success) throw "Erro a obter a mensagem FHIR";
  else
    res.status(200).json({ success: true, info: "Mensagem recolhida com sucesso", data: jsonByIdResponse});
    
  });

  router.get("/mensagemcomposition/:id", async (req, res) => {
    identificador= req.params.id;
    let jsonByIdResponse = await CompositionController.getJsonById(identificador);
    if(!jsonByIdResponse.success) throw "Erro a obter a mensagem FHIR";
    else
      res.status(200).json({ success: true, info: "Mensagem recolhida com sucesso", data: jsonByIdResponse});
      
    });
  
  router.delete("/delete/:id", async (req, res) => {
    identificador= req.params.id;
    let deletemsg = await messageFHIRController.deleteMensagem(identificador);
    let deletecomposition = await CompositionController.deleteComposition(identificador);
    if(!deletecomposition.success | !deletemsg.success) throw "Erro a eliminar a mensagem FHIR";
    else
      res.status(200).json({ success: true, info: "Mensagem apagada com sucesso"});
    });

app.use(router);

app.listen(8080, () => {
console.log('Server started on port 8080');
});
