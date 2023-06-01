import './login.css';


function Options() {
return (
    <div class="button-container">
		<button class="button" onClick={() => { window.location.href = '/formulario'; }}>Nova composição</button>
		<button class="button" onClick={() => { window.location.href = '/listar'; }}>Listar composições</button>
	</div>
  );
}

export default Options;