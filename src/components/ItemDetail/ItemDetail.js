// Aca tenes que escribir lo mismo que esta en el Card
import * as React from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({item}) => {

    const comprar = (titulo) => {
        console.log(`Compraste ${titulo}`);
    }

    const volverAtras = () => {
        console.log("Volver a la página anterior.");
    }

  return (
    <div className="item">
        <div className="imageContainer">
            <img className="image" src={item.image} alt={item.title} />
        </div>
        <h3 className="title">{item.title}</h3>
        <p className="description">{item.description}</p>
        <p className="price">$ {item.price}</p>
        {
            item.stock > 0 && <ItemCount stock={item.stock} inicial={0} />
        }
        <button className="button" onClick={() => comprar(item.title)}>
            Agregar al Carrito
        </button>
        <button className="button" onClick={() => volverAtras()}>
            Volver
        </button>

    </div>
  );
};

export default ItemDetail;
