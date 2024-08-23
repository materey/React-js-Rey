import { useState, useEffect } from "react";
import ItemList  from "./ItemList";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css"
import { getDocs, collection, query, where } from 'firebase/firestore';
import db from '../../db/db.js';

const ItemListContainer = ( {bienvenida} ) => {
    
    const [productos, setproductos] = useState( [] );
    const { idCategoria } = useParams();
    const getProducts = async () => {
        const productosRef = collection(db, 'productos');
        const dataDb = await getDocs(productosRef);
    
        const data = dataDb.docs.map((productDb) => {
        return { id: productDb.id, ...productDb.data() };
        });
        setproductos(data)
    };
    const getProductsByCategory = async () => {
        const productosRef = collection(db, 'productos');
        const q = query(productosRef, where('categoria', '==', idCategoria));
        const dataDb = await getDocs(q);
    
        const data = dataDb.docs.map((productDb) => {
        return { id: productDb.id, ...productDb.data() };
        });
    
        setproductos(data);
        };

    useEffect( ()=> {
        if (idCategoria) {
            getProductsByCategory();
        } else {
            getProducts();
        }
}, [idCategoria])

    return (
    <div>
        <h2>{bienvenida}</h2>
        <ItemList productos={productos} />

    </div>
    )
}

export default ItemListContainer