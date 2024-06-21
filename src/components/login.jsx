import LoginForm from './loginForm';
import '../styles/login.css'
import Header from './header';

function Login() {
    return(
        <div>
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