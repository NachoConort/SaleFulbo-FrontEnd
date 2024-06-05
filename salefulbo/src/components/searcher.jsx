import '../styles/searcher.css'

function Searcher(){
    return(
        <div className='searcherContainer'>
            <input type="search" className='searcher' placeholder='Buscar cancha' />
            <button className='searchButton'>
                <img src={require('../images/search.png')} alt="Icono buscar" width="30px" />
            </button>
        </div>
    )
}

export default Searcher