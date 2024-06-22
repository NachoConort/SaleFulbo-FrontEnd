import '../styles/loginForm.css'

import axios from 'axios';

function LoginForm () {
  return (
    <div className='formContainer'>
      <div className='changeButton'>
        <div id='selectedButton'></div>
        <button className='buttonChange' onClick={showLogin}>Iniciar Sesión</button>
        <button className='buttonChange' onClick={showRegister}>Registrarse</button>
      </div>
      <form className='form' id='formLogin'>
        <input type="email" className='inputForm' id='nameLogin' placeholder="Email" required/>
        <input type="password" className='inputForm' id='passwordLogin' placeholder="Contraseña" required/>
        <p id="logintxt"></p>
        <button type="submit" className='buttonSubmit' onClick={login}>Iniciar Sesión</button>
      </form>
      <form className='form' id='formRegister'>
        <input type="text" className='inputForm' id='nameRegister' placeholder="Nombre Cancha" required/>
        <input type="email" className='inputForm' id='emailRegister' placeholder="Email" required/>
        <input type="text" className='inputForm' id='direccionRegister' placeholder="Dirección" required/>
        <input type="password" className='inputForm' id='passwordRegister' placeholder="Contraseña" required/>
        <input type="text" className='inputForm' id='openTime' placeholder="Horario Apertura" required/>
        <input type="text" className='inputForm' id='closeTime' placeholder="Horario Cierre" required/>
        <input type="text" className='inputForm' id='pricing' placeholder="Precio" required/>
        <p id="registertxt"></p>
        <button type="submit" className='buttonSubmit' onClick={register}>Registrarse</button>
      </form>
    </div>
  )
}

document.addEventListener("DOMContentLoaded", function () {
  const formLogin = document.getElementById("formLogin");
  const formRegister = document.getElementById("formRegister");
  const selectedButton = document.getElementById("selectedButton");
})

function showLogin() {
  formLogin.style.left = "0px";
  formRegister.style.left = "100%";
  selectedButton.style.left = "0px";
}

function showRegister() {
  formLogin.style.left = "-100%"; 
  formRegister.style.left = "0px";
  selectedButton.style.left = "50%";
}

function login(e) {
  e.preventDefault();

  const nombreLogin = document.getElementById('nameLogin').value;
  const passwordLogin = document.getElementById('passwordLogin').value;
  const logintxt = document.getElementById('logintxt');

  axios.get('http://localhost:4000/users')
  .then(function(response) {
    const users = response.data;
    const userValid = users.find(user => user.user === nombreLogin && user.password === passwordLogin);

    if (!userValid) {
      logintxt.innerHTML = "Email y/o contraseña incorrectos!";
    } else {
      location.pathname = `/logued/${userValid._id}`

      formLogin.reset();
    }
  })

}

function register(e) {

  e.preventDefault();

  const nombre = document.getElementById('nameRegister').value;
  const email = document.getElementById('emailRegister').value;
  const direcc = document.getElementById('direccionRegister').value;
  const password = document.getElementById('passwordRegister').value;
  const openTime = document.getElementById('openTime').value;
  const closeTime = document.getElementById('closeTime').value;
  const pricing = document.getElementById('pricing').value;
  const registertxt = document.getElementById('registertxt');

  axios.get('http://localhost:4000/users')
  .then(function(response) {
    const users = response.data;
    const userRegistered = users.find(user => user.user === email);

    if(userRegistered) {
      registertxt.innerHTML = "Este usuario ya está registrado!";
    } else {
      axios.post('http://localhost:4000/users', {
        user: email,
        password: password,
        name: nombre,
        address: direcc,
        openTime: openTime,
        closeTime: closeTime,
        pricing: pricing
      })
    
      formRegister.reset();
    }
  })
}

export default LoginForm;