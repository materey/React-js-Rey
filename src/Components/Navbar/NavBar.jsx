import './navbar.css'
import CartWidget from './CartWidget'

const NavBar = () => {
    return (
        <nav className="navbar">
            <ul>
            <button>Palos</button>
            <button>Bolsos</button>
            <button>Indumentaria</button>
            <button>Accesorios</button>
            </ul>

            <CartWidget />
        </nav>
    )
    }

export default NavBar