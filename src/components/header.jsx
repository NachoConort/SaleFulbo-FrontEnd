import { Link, useLocation } from "react-router-dom"

function Header() {
    const location = useLocation();

    const getLinkUrl = () => {
        if (location.pathname === '/') {
            return '/login';
        } else if (location.pathname === '/login') {
            return '/';
        } else if (location.pathname.startsWith('/reserve/')) {
            return '/';
        } else if (location.pathname.startsWith('/logued/')) {
            return '/';
        }
    };

    const getLinkText = () => {
        if (location.pathname === '/') {
            return 'Iniciar sesión';
        } else if (location.pathname === '/login') {
            return 'Volver';
        } else if (location.pathname.startsWith('/reserve/')) {
            return 'Volver';
        } else if (location.pathname.startsWith('/logued/')) {
            return 'Cerrar sesión';
        }
    };

    return(
        <header>
            <div>
                <span>Sale fulbo</span>
            </div>
            <div>
                <h1>Alquiler de canchas en Tucumán</h1>
            </div>
            <div>
                <Link to={getLinkUrl()}>{getLinkText()}</Link>
            </div>
        </header>
    )
}
export default Header