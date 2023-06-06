import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Mensagem = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/mensagem/${id}`);
        const jsonData = await response.data;
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
      <h1>Mensagem FHIR</h1>
      {data ? (
        <center>
        <div style={{ backgroundColor: 'lightgray', padding: '10px' }}>
        <pre style={{ color: 'blue' }}>{JSON.stringify(data, null, 2)}</pre>
        </div>
        </center>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default Mensagem;
