import React, { useState } from 'react';
import "./ItemCount.css";

function ItemCount({stock, inicial, onAdd}) {
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
    <div className="itemCount">
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
  );
}

export default ItemCount;
