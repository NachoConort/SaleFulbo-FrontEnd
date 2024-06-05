import '../styles/main.css'
import Searcher from './searcher'
import Map from './map'

function Main(){
    return(
        <div className="main">
            <Searcher/>
            <Map/>
        </div>
    )
}

export default Main