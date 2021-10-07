// Aca tenes que escribir lo mismo que esta en el Card
import * as React from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import CartContext from "../../context/CartContext";
import { Link } from "react-router-dom";

const ItemDetail = ({item}) => {
    const [cantidad, setCantidad] = React.useState(0);
    const [finalizar, setFinalizar] = React.useState(false);

    const onAdd = (evento, valor) => {
      setCantidad(valor);
      CartContext.
      setFinalizar(true);
    };

  return (
    <div className="itemDetail">
        <div className="imageContainer">
        <img className="image" src={item.image} alt={item.title} />
        </div>
        <h2 className="title">{item.title}</h2>
        <p className="description">{item.description}</p>
        <p className="price">$ {item.price}</p>
        {
            item.stock > 0 && cantidad == 0 && <ItemCount stock={item.stock} inicial={1} onAdd={onAdd}/>
        }
        {finalizar &&
            <button className="button">
                
                <Link style={{ textDecoration: "none", color: "inherit" }} to="/cart" >
                    Ir al carrito
                 </Link>
             </button>
        }
        <button className="button">
            <Link style={{ textDecoration: "none", color: "inherit" }} to="/" >
                Volver
             </Link>
         </button>
    </div>
  );
};

export default ItemDetail;
