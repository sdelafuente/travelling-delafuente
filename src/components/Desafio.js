import React, { useState } from 'react';

function Desafio() {
  const [contador, setContador] = useState(0);
  const incrementar = () => {
    setContador(prevState => prevState + 1);
  };

  return (
    <div >
      <p>{contador}</p>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
}

export default Desafio;
