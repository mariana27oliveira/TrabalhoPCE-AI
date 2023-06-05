import './login.css';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';


function AfterLog() {
return (
    <div>
		<Navbar/>
	<div class="button-container">
		<button class="button" onClick={() => { window.location.href = '/formulario'; }}>Nova composição</button>
		<button class="button" onClick={() => { window.location.href = '/listaFhirs'; }}>Listar composições</button>
	</div>
	<Footer/>
	</div>
  );
}

export default AfterLog;