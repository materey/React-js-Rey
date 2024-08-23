import { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Timestamp, addDoc, collection } from 'firebase/firestore';
import FormularioCheckout from './FormularioCheckout';
import db from '../../db/db.js';
import validateForm from '../../utils/validacionFormulario.js';
import './Checkout.css';
import { toast } from 'react-toastify';



const Checkout = () => {
    const [datosForm, setDatosForm] = useState({
        nombre: '',
        telefono: '',
        email: '',
    });
    const [idOrden, setIdOrden] = useState(null);
    const { carrito, precioTotal } = useContext(CartContext);

    const handleChangeInput = (event) => {
        setDatosForm({ ...datosForm, [event.target.name]: event.target.value });
    };

    const handleSubmitForm = async (event) => {
        event.preventDefault();

    const orden = {
        comprador: { ...datosForm },
        productos: [...carrito],
        fecha: Timestamp.fromDate(new Date()),
        total: precioTotal(),
    };
    const response = await validateForm(datosForm);
    if (response.status === "success") {
        sendOrder(orden);
    } else {
        toast.warning(response.message);
    }
    };

    const sendOrder = async (orden) => {
        try {
            const ordenesRef = collection(db, "ordenes");
            const ordenDb = await addDoc(ordenesRef, orden);
            setIdOrden(ordenDb.id);
        } catch (error) {
        console.log(error);
        }
    };

    return (
    <div className="checkout">
        {idOrden ? (
        <div className="order-completed">
            <h2>Orden completada correctamente! </h2>
            <p>Guarde el id de su orden generada: {idOrden} </p>
        </div>
        ) : (
        <FormularioCheckout
            datosForm={datosForm}
            handleChangeInput={handleChangeInput}
            handleSubmitForm={handleSubmitForm}
        />
        )}
    </div>
    );
};
export default Checkout;