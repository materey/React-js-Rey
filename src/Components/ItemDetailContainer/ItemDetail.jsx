import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetailContainer.css"
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const ItemDetail = ({ producto }) => {
    const { agregarProducto } = useContext(CartContext)
    const [mostrarItemCount, setMostrarItemCount] = useState(true);
    
    const agregarAlCarrito = (contador) => {
    const productoCarrito = { ...producto, cantidad: contador };

    agregarProducto(productoCarrito)

    setMostrarItemCount(false)
};

    return (
    <div className="detail">
        <div className="img-detail">
            <img src={producto.imagen} alt={producto.nombre} />
        </div>
        <div className="detail-text">
            <h2>{producto.nombre}</h2>
            <p>{producto.descripcion}</p>
            <p>Precio: c/u ${producto.precio}</p>
            {mostrarItemCount ? (
                <ItemCount stock={producto.stock} agregarAlCarrito={agregarAlCarrito} />
            ) : (
                <Link to="/cart">Ir al carrito</Link>
            )}
        </div>
    </div>
    );
};
export default ItemDetail