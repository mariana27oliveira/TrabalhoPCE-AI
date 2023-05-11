import axios from 'axios';
import React from 'react';
import {Form} from "protected-aidaforms";
import './style_imagem.json';

let json = require('./jdt_imagem.json');

const Forms = () => {
  return (
    <div className="Form">
      <Form
        onSubmit={(values, changedFields) => console.log("SUBMITTED VALUES: ", values, "CHANGED FIELDS: ", changedFields)}
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