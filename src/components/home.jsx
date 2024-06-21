import '../styles/home.css';
import Footer from './footer';

import Header from './header';
import Main from './main';

function Home() {
    return(
        <div>
            <div>
                <Header/>
            </div>
            <div>
                <Main/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}
export default Home