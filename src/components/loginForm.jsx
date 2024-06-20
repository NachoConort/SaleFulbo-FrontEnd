import { useState } from 'react';
import '../styles/loginForm.css'

function LoginForm () {
  return (
    <div className='formContainer'>
      <div className='changeButton'>
        <div id='selectedButton'></div>
        <button className='buttonChange' onClick={showLogin}>Iniciar Sesión</button>
        <button className='buttonChange' onClick={showRegister}>Registrarse</button>
      </div>
      <form className='form' id='formLogin'>
        <input type="email" className='inputForm' placeholder="Email" required/>
        <input type="password" className='inputForm' placeholder="Contraseña" required/>
        <button type="submit" className='buttonSubmit'>Iniciar Sesión</button>
      </form>
      <form className='form' id='formRegister'>
        <input type="text" className='inputForm' placeholder="Nombre Cancha" />
        <input type="email" className='inputForm' placeholder="Email" />
        <input type="email" className='inputForm' placeholder="Confirmar Email" />
        <input type="text" className='inputForm' placeholder="Dirección" />
        <input type="password" className='inputForm' placeholder="Contraseña" />
        <input type="password" className='inputForm' placeholder="Confirmar Contraseña" />
        <button type="submit" className='buttonSubmit'>Registrarse</button>
      </form>
    </div>
  )
}

const formLogin = document.getElementById("formLogin");
const formRegister = document.getElementById("formRegister");
const selectedButton = document.getElementById("selectedButton");

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

export default LoginForm;