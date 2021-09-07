import * as React from "react";
import "./CartWidget.css";

const CartWidget = ({ title, image, cantidad }) => {
  return (
    <div className="cartWidget">
        <p>{cantidad}</p> 
        <img src={image} alt={title} />
    </div>
  );
};

export default CartWidget;