import LoginForm from './loginForm';
import '../styles/login.css'
import Header from './header';

function Login() {
    return(
        <div className='bodyContainer'>
            <div>
                <Header/>
            </div>
            <div className='container'>
                <LoginForm />
            </div>
        </div>
    )
}
export default Login