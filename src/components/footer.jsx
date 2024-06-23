import racingIcon from '../assets/racing.png'

function easterEgg() {
    return alert("Asociate a Racing (tenemos hambre) => https://www.racingclub.com.ar/socios/asociate/")
}

function Footer() {
    return(
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
                <img src={racingIcon} alt="" width="80px" className='spin' onClick={easterEgg}/>
            </div>
            <div>
                <h2><span>Sale fulbo</span></h2>
                <h5>® Todos los derechos reservados</h5>
            </div>
        </footer>
    )
}
export default Footer