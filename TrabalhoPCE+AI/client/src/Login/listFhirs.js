import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './listFhirs.css';

function ListaFhirs() {
  const [fhirList, setFhirList] = useState([]);
  const [success, setSuccess] = useState(null);
  const [filteredFhirList, setFilteredFhirList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    axios.post('http://localhost:8080/listfhirs').then((response) => {
      if (response.data.success) {
        setFhirList(response.data.data.response);
        setFilteredFhirList(response.data.data.response); 
        console.log(response.data.data.response);
      } else {
        console.error('Error retrieving designations');
        setSuccess(response.data.response);
      }
    });
  }, []);

  const deleteTerm = (id) => {
    axios.delete('http://localhost:8080/delete/' + id
    ).then((res) => {
      alert(res.data.info);
    });
  };

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setSelectedCategory(selectedCategory);
    if (selectedCategory === '') {
      setFilteredFhirList(fhirList);
    } else {
      const filteredList = fhirList.filter(
        (fhir) => fhir.fhir.entry[2].resource.category.coding[0].display === selectedCategory
      );
      setFilteredFhirList(filteredList);
    }
  };
  
  return (
    <div className='lista-fhirs-container'>
      <h1 className='title'>Lista das Mensagens FHIR:</h1>
      <div className='filter-container'>
        <label htmlFor='categoryFilter'>Filtrar por categoria: </label>
        <select id='categoryFilter' value={selectedCategory} onChange={handleCategoryChange}>
          <option value=''>Todas as categorias</option>
          <option value='Audiology'>Audiology</option>
          <option value='Blood Gases'>Blood Gases</option>
          <option value='Blood Bank'>Blood Bank</option>
          <option value='Cytogenetics'>Cytogenetics</option>
          <option value='Chemistry'>Chemistry</option>
          <option value='Cytopathology'>Cytopathology</option>
          <option value='CAT Scan'>CAT Scan</option>
          <option value='Cardiac Catheterization'>Cardiac Catheterization</option>
          <option value='Cardiac Ultrasound'>Cardiac Ultrasound</option>
          <option value='Electrocardiac'>Electrocardiac (e.g. EKG, EEC, Holter)</option>
          <option value='Electroneuro'>Electroneuro (EEG, EMG, EP, PSG)</option>
          <option value='Genetics'>Genetics</option>
          <option value='Hematology'>Hematology</option>
          <option value='Bedside ICU Monitoring'>Bedside ICU Monitoring</option>
          <option value='Diagnostic Imaging'>Diagnostic Imaging</option>
          <option value='Immunology'>Immunology</option>
          <option value='Laboratory'>Laboratory</option>
          <option value='Microbiology'>Microbiology</option>
          <option value='Mycobacteriology'>Mycobacteriology</option>
          <option value='Mycology'>Mycology</option>
          <option value='Nuclear Magnetic Resonance'>Nuclear Magnetic Resonance</option>
          <option value='Nuclear Medicine Scan'>Nuclear Medicine Scan</option>
          <option value='Nursing Service Measures'>Nursing Service Measures</option>
          <option value='Outside Lab'>Outside Lab</option>
          <option value='Occupational Therapy'>Occupational Therapy</option>
          <option value='Other'>Other</option>
          <option value='OB Ultrasound'>OB Ultrasound</option>
          <option value='Parasitology'>Parasitology</option>
          <option value='Pathology'>Pathology (gross & histopath, not surgical)</option>
          <option value='Pulmonary Function'>Pulmonary Function</option>
          <option value='Pharmacy'>Pharmacy</option>
          <option value='Physician'>Physician (Hx. Dx, admission note, etc.)</option>
          <option value='Physical Therapy'>Physical Therapy</option>
          <option value='Radiology'>Radiology</option>
          <option value='Respiratory Care'>Respiratory Care (therapy)</option>
          <option value='Radiation Therapy'>Radiation Therapy</option>
          <option value='Radiology Ultrasound'>Radiology Ultrasound</option>
          <option value='Radiograph'>Radiograph</option>
          <option value='Surgical Pathology'>Surgical Pathology</option>
          <option value='Serology'>Serology</option>
          <option value='Toxicology'>Toxicology</option>
          <option value='Urinalysis'>Urinalysis</option>
          <option value='Virology'>Virology</option>
          <option value='Vascular Ultrasound'>Vascular Ultrasound</option>
          <option value='Cineradiograph'>Cineradiograph</option>
        </select>
      </div>
      <table className='custom-table'>
        <thead>
          <tr>
            <th>Data de criação</th>
            <th>ID</th>
            <th>Paciente</th>
            <th>Acesso à mensagem</th>
            <th>Apagar</th>
          </tr>
        </thead>
        <tbody>
          {filteredFhirList.length === 0 ? (
            <tr>
              <td colSpan="5">Nenhuma mensagem foi encontrada.</td>
            </tr>
          ) : (
            filteredFhirList.map((fhir) => (
              <tr key={fhir._id}>
                <td>{fhir.createdAt}</td>
                <td>{fhir.fhir.id}</td>
                <td>
                  ({fhir.fhir.entry[1].resource.id}) {fhir.fhir.entry[1].resource.name[0].text}
                </td>
                <td>
                  <Link to={'/mensagem/' + fhir.fhir.id} className='link'>
                    Acesso
                  </Link>
                </td>
                <td>
                  <button className='delete-button' onClick={() => deleteTerm(fhir.fhir.id)}>
                    Apagar
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
  
      {success && <p>Erro: {success}</p>}
    </div>
  );
}
  
export default ListaFhirs;
