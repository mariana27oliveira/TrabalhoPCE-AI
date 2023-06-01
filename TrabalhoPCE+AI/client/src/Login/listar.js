import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './login.css';

function Lista() {
  const [designations, setDesignations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/listcompositions');
        const { data } = response.data;
        setDesignations(data);
      } catch (error) {
        console.error('Error retrieving designations:', error);
      }
    };

    fetchData();
  }, []);

  const deleteTerm = (term) => {
    // Function to handle term deletion
  };

  return (
    <table id="example" className="display" style={{ width: '100%' }}>
      <thead>
        <tr>
          <th>Composition ID</th>
          <th>Composition JSON</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {designations.map((d) => (
          <tr key={d.id}>
            <td>{d.id}</td>
            <td>{d.json}</td>
            <td>
              <button type="button" className="btn btn-link delete-btn" onClick={() => deleteTerm(d)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Lista;
