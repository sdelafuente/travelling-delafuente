// Aca tenes que escribir lo mismo que esta en el Card
import * as React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ productoId, title, description, image, comprar, price }) => {
  return (
    <div className="item">
    <Link style={{ textDecoration: "none", color: "inherit" }} to={`/item/${productoId}`}>
          <h3 className="title">{title}</h3>
          <div className="imageContainer">
            <img className="image" src={image} alt={title} />
          </div>
          <p className="price">$ {price}</p>
      </Link>
      {
          // <button className="styles.button} onClick={() => comprar(title)}>
          // ¡Comprar ahora!
          // </button>
      }
    </div>
  );
};

export default Item;
