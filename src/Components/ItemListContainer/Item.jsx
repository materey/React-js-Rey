import { Link } from "react-router-dom";

const Item = ({ producto }) => {
    return (
    <Link to={"/detalle/" + producto.id } style={{margin:"0 100px"}}>
        <img width={250} src={producto.imagen} alt="" />
        <p>{producto.nombre}</p>
    </Link>
    );
};

export default Item