import Places from "./places"

import searchIcon from '../assets/search.png'

function Main() {
    return(
        <main>
            <div className='searcherContainer'>
                <input type="search" className='searcher' placeholder='Buscar cancha' />
                <button id='searchButton'>
                    <img src={searchIcon} alt="Icono buscar" width="30px" />
                </button>
            </div>
            <Places/>
        </main>
    )
}
export default Main