import '../styles/home.css';
import { Link } from 'react-router-dom';

import searchIcon from '../assets/search.png'

import Places from './places';

function Home() {
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
                        <Link to="/login">Iniciar sesión</Link>
                    </div>
                </header>
            </div>
            <main>
                <div className='searcherContainer'>
                    <input type="search" className='searcher' placeholder='Buscar cancha' />
                    <button className='searchButton'>
                        <img src={searchIcon} alt="Icono buscar" width="30px" />
                    </button>
                </div>
                <Places/>
            </main>
            <footer>
            <div className='team'>
                <h5>Equipo de desarrollo:</h5>
                <div className='member'>
                    <h6>Ignacio Conort</h6>
                    <h6>Programador Universitario</h6>
                    <p>nachoconort@gmail.com</p>
                </div>
                <div className='member'>
                    <h6>Máximo Callejas</h6>
                    <h6>Programador Universitario</h6>
                    <p>maximofcallejas@gmail.com</p>
                </div>
                <div className='member'>
                    <h6>Tomás Molina</h6>
                    <h6>Programador Universitario</h6>
                    <p>tomas.molina465@gmail.com</p>
                </div>
            </div>
            <div>
                <h2><span>Sale fulbo</span></h2>
                <h5>® Todos los derechos reservados</h5>
            </div>
            </footer>
        </div>
    )
}
export default Home