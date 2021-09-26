// Aca tenes que escribir lo mismo que esta en el Card
import * as React from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = ({item}) => {

    const comprar = (titulo) => {
        console.log(`Compraste ${titulo}`);
    }

  return (
    <div className="itemDetail">
        <div className="imageContainer">
        <img className="image" src={item.image} alt={item.title} />
        </div>
        <h2 className="title">{item.title}</h2>
        <p className="description">{item.description}</p>
        <p className="price">$ {item.price}</p>
        {
            item.stock > 0 && <ItemCount stock={item.stock} inicial={1} />
        }
        <button className="button" onClick={() => comprar(item.title)}>
            Agregar al Carrito
        </button>
        <button className="button">
            <Link style={{ textDecoration: "none", color: "inherit" }} to="/" >
                Volver
             </Link>
         </button>
    </div>
  );
};

export default ItemDetail;
