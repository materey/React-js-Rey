import { useState, useEffect } from "react";
import obtenerProductos  from "../../data/data.js";
import ItemList  from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ( {bienvenida} ) => {
    
    const [productos, setproductos] = useState( [] );
    const { idCategoria } = useParams();

    useEffect( ()=> {
    obtenerProductos()
        .then((respuesta) => {
            if ( idCategoria ) {
                const productosFiltrados = respuesta.filter ((producto)=> producto.categoria === idCategoria )
                setproductos(productosFiltrados)
            } else {
                setproductos(respuesta);
            }
    })
        .catch((error) => {
            console.error(error);
    })
        .finally(() => {
            console.log("Finalizo la promesa");
    });
}, [idCategoria])

    return (
    <div>
        <h2>{bienvenida}</h2>
        <ItemList productos={productos} />

    </div>
    )
}

export default ItemListContainer