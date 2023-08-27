import React, { useState } from 'react';

const EvenOddCounter: React.FC = () => {
  // Estado para almacenar el número límite y los conteos de números pares e impares
  const [limit, setLimit] = useState('');
  const [evenCount, setEvenCount] = useState(0);
  const [oddCount, setOddCount] = useState(0);

  // Manejador para contar números pares e impares cuando se presiona el botón "Contar"
  const handleCount = () => {
    const parsedLimit = parseInt(limit);
    let even = 0;
    let odd = 0;

    for (let i = 1; i <= parsedLimit; i++) {
      if (i % 2 === 0) {
        even++;
      } else {
        odd++;
      }
    }

    // Actualiza los conteos de números pares e impares
    setEvenCount(even);
    setOddCount(odd);
  };

  return (
    <div>
      {/* Input para ingresar el número límite */}
      <input
        type="number"
        value={limit}
        onChange={(e) => setLimit(e.target.value)}
      />
      {/* Botón para contar y mostrar los resultados */}
      <button onClick={handleCount}>Contar</button>
      <div>Números pares: {evenCount}</div>
      <div>Números impares: {oddCount}</div>
    </div>
  );
};

export default EvenOddCounter;
