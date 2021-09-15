// Aca tenes que escribir lo mismo que esta en el Card
import * as React from "react";
import "./Item.css";

const Item = ({ title, description, image, comprar, price }) => {
  return (
    <div className="item">
      <h3 className="title">{title}</h3>
      <div className="imageContainer">
        <img className="image" src={image} alt={title} />
      </div>
      <p className="description">{description}</p>
      <p className="price">$ {price}</p>
      {
          // <button className="styles.button} onClick={() => comprar(title)}>
          // ¡Comprar ahora!
          // </button>
      }
    </div>
  );
};

export default Item;
