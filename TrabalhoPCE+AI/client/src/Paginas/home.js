import React from 'react';
import './home.css'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';


function Home() {
  return (
    <div>
      <Navbar/>
      <div class="button-container">
        <h1>EXAMES MÉDICOS</h1>
	    </div>
      <Footer/>
    </div>
  );
}

export default Home;

