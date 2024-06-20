import { Link } from 'react-router-dom';

import LoginForm from './loginForm';
import '../styles/login.css'

function Login() {
    return(
        <div>
            <div>
                <header>
                    <div>
                        <span>Sale fulbo</span>
                    </div>
                    <div>
                        <h1>Alquiler de canchas en Tucumán</h1>
                    </div>
                    <div>
                        <Link to="/">Volver</Link>
                    </div>
                </header>
            </div>
            <div className='container'>
                <LoginForm />
            </div>
        </div>
    )
}
export default Login