import './login.css';


function AfterLog() {
return (
    <div class="button-container">
		<button class="button" onClick={() => { window.location.href = '/formulario'; }}>Nova composição</button>
		<button class="button" onClick={() => { window.location.href = '/listar'; }}>Listar composições</button>
	</div>
  );
}

export default AfterLog;