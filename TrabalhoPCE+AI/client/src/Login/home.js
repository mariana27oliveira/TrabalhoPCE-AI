
import React from 'react';
import './login.css';

function Home() {
  return (
    /*
    <div>
      <header>
        <nav>
          <ul>
            <li><a href="#">My Account</a>
              <ul>
                <li><a href="#">Login</a></li>
                <li><a href="#">Create an account</a></li>
              </ul>
            </li>
          </ul>
        </nav>
      </header>

      <h1>....</h1>
      <p>....</p>
    </div>
    */
    <div class="button-container">
		  <button class="button" onClick={() => { window.location.href = '/signin'; }}>Create an Acxount</button>
		  <button class="button" onClick={() => { window.location.href = '/login'; }}>Login</button>
	  </div>
  );
}

export default Home;
