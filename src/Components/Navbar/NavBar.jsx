import './navbar.css'
import CartWidget from './CartWidget'
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="brand">
                <img src="" alt=""/>
            </div>
            <ul>
            <Link to="/categoria/Palos"><button>Palos</button></Link>
            <Link to="/categoria/Bolsos"><button>Bolsos</button></Link>
            <Link to="/categoria/Indumentaria"><button>Indumentaria</button></Link>
            <Link to="/categoria/Accesorios"><button>Accesorios</button></Link>
            </ul>

            <CartWidget />
        </nav>
    )
    }

export default NavBar