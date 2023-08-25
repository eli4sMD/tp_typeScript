import React, { useState } from 'react';

const EvenOddCounter: React.FC = () => {
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [evenCount, setEvenCount] = useState(0);
  const [oddCount, setOddCount] = useState(0);

  const handleCount = () => {
    const parsedStart = parseInt(start);
    const parsedEnd = parseInt(end);
    let even = 0;
    let odd = 0;

    for (let i = parsedStart; i <= parsedEnd; i++) {
      if (i % 2 === 0) {
        even++;
      } else {
        odd++;
      }
    }

    setEvenCount(even);
    setOddCount(odd);
  };

  return (
    <div>
      <input
        type="number"
        value={start}
        onChange={(e) => setStart(e.target.value)}
      />
      <input
        type="number"
        value={end}
        onChange={(e) => setEnd(e.target.value)}
      />
      <button onClick={handleCount}>Contar</button>
      <div>Cantidad de números pares: {evenCount}</div>
      <div>Cantidad de números impares: {oddCount}</div>
    </div>
  );
};

export default EvenOddCounter;
