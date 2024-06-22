import '../styles/home.css';
import Footer from './footer';

import Header from './header';
import Places from './places';

function Home() {
    return(
        <div>
            <div>
                <Header/>
            </div>
            <div>
                <Places/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}
export default Home