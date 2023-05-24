import axios from 'axios';
import React from 'react';
import {Form} from "protected-aidaforms";
import './style_imagem.json';

let json = require('./jdt_imagem.json');


onSubmit = async (values) => {
  try {
    const response = await axios.post('/newcomposition', values);
    console.log('POST request successful:', response.data);
    alert('Composition submitted successfully!');
  } catch (error) {
    console.error('Error submitting composition:', error);
    alert('Error submitting composition. Please try again.');
  }
};


const Forms = () => {
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

      submitButtonDisabled={false}
      saveButtonDisabled={false}
     />
    </div>
  );
}

export default Forms;