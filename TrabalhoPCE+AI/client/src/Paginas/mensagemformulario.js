import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Form } from 'protected-aidaforms';
let {replace_values_jdt} = require("./replace_values_jdt") ;

let style = require('../style_imagem.json');

const Formulario = () => {
  const { id } = useParams();
  const [jsonData, setJsonData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/mensagemcomposition/${id}`);
        const jsonData = response.data.data.response.values;
        setJsonData(jsonData);
        setLoading(false);
        
      } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  fetchData();
  }, [id]);

  const getModifiedJDT = () => {
    if (jsonData) {
      const modifiedJDT = replace_values_jdt(jsonData); 
      return modifiedJDT;
    }
    return null;
  };

  return (
    <div className="Form">
        {loading && (
            <p className='center'>Loading...</p>
        )}
        {!(loading) && (
            <Form
                onSubmit={(values, changedFields) => console.log("SUBMITTED VALUES: ",values,"CHANGED FIELDS: ",changedFields)}
                onSave={(values, changedFields) => console.log("SAVED VALUES: ", values, "CHANGED FIELDS: ", changedFields)}
                onCancel={status => console.log("CANCELLED:", status)}
                dlm={{}}
                template={getModifiedJDT()}
                showPrint={true}
                editMode={false}
                professionalTasks={["Registar Pedido", "Consultar Pedido","Anular Pedido"]}
                canSubmit={false}
                canSave={false}
                canCancel={false}
                formDesign= {JSON.stringify(style)}
                submitButtonDisabled={false}
                saveButtonDisabled={false}
            />
        )}
    </div>
  );
}

export default Formulario;