import axios from 'axios';
import React from 'react';
import {Form} from "protected-aidaforms";

let json = require('./jdt_imagem.json');
let style= require('./style_imagem.json');

import './style_imagem.json';
import { useNavigate } from 'react-router-dom';


let json = require('./jdt_imagem.json');

const Forms = () => {

  //const navigate = useNavigate();

  const onSubmit = async (values) => {
    values = JSON.parse(values)
    try {
      const response = await axios.post('http://localhost:8080/newcomposition', {values});
      console.log(values);
      console.log('POST request successful:', response.data);
      alert('Composition submitted successfully!');
      //navigate('/afterlog');
    } catch (error) {
      console.error('Error submitting composition:', error);
      alert('Error submitting composition. Please try again.');
    }
  };
  return (
    <div className="Form">
      <Form
        onSubmit={(values)=> onSubmit(values)}
        onSave={(values, changedFields) => console.log("SAVED VALUES: ", values, "CHANGED FIELDS: ", changedFields)}
        onCancel={status => console.log("CANCELLED:", status)}
        dlm={{}}
        template={json}
        showPrint={true}
        editMode={true}
        professionalTasks={["Registar Pedido", "Consultar Pedido","Anular Pedido"]}
        canSubmit={true}
        canSave={true}
        canCancel={true}
        formDesign= {JSON.stringify(style)}
        submitButtonDisabled={false}
        saveButtonDisabled={false}
     />
    </div>
  );
}

export default Forms;
