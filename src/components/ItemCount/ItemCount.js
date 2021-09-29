import React, { useState } from 'react';
import "./ItemCount.css";

const ItemCount = ({stock, inicial, onAdd}) => {
  const [contador, setContador] = useState(inicial);

  const incrementar = () => {
      if (contador < stock) {
          setContador(prevState => prevState + 1);
      }
  };

  const decrementar = () => {
      if (contador > 1) {
          setContador(prevState => prevState - 1);
      }
  };

  return (
    <div >
        <div className="div itemCount">
            <div >
                <button onClick={decrementar}><span>-</span></button>
            </div>
            <div >
                <p>{contador}</p>
            </div>
            <div >
                <button onClick={incrementar}><span>+</span></button>
            </div>
        </div>

        <div className="div">
            <button className="button" onClick={(evento) => onAdd(evento, contador)}>
                Agregar al Carrito
            </button>
        </div>
    </div>

  );
};

export default ItemCount;
