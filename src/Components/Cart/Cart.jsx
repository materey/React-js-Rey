import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import './Cart.css';


const Cart = () => {
    const { carrito, precioTotal, borrarProducto, vaciarCarrito } = useContext(CartContext)

    if(carrito.length === 0){
        return (
            <div>
                <h2>El carrito esta vacio 😥</h2>
                <Link to="/" >Ver Productos</Link>
            </div>
        )
    }

return (
    <div className="cart">
        <ul className="cart-list">
        {carrito.map( (productoCarrito) => (
            <li className="cart-item">
                <img width={150} src={productoCarrito.imagen} alt="" />
                <p>{productoCarrito.nombre}</p>
                <p>Cantidad: {productoCarrito.cantidad}</p>
                <p>Precio c/u: ${productoCarrito.precio}</p>
                <p>Precio parcial: ${productoCarrito.cantidad * productoCarrito.precio}</p>
                <button onClick={() => borrarProducto(productoCarrito.id)}>Borrar</button>
            </li>
        ))}
        </ul>
        <div className="buttons">
            <button onClick={vaciarCarrito}>Vaciar Carrito</button>
            <h2>Precio Total: {precioTotal()}</h2>
            <Link className="button-cart" to="/checkout">
                Seguir con mi compra
            </Link>     
        </div>
    </div>
)
}

export default Cart