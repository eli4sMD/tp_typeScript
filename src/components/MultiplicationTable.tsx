import React, { useState } from 'react';

const MultiplicationTable: React.FC = () => {
  const [number, setNumber] = useState('');
  const [limit, setLimit] = useState('');
  const [table, setTable] = useState<number[]>([]);

  const handleGenerateTable = () => {
    const parsedNumber = parseInt(number);
    const parsedLimit = parseInt(limit);
    const tableArray: number[] = [];

    for (let i = 1; i <= parsedLimit; i++) {
      tableArray.push(parsedNumber * i);
    }

    setTable(tableArray);
  };

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <input
        type="number"
        value={limit}
        onChange={(e) => setLimit(e.target.value)}
      />
      <button onClick={handleGenerateTable}>Generar Tabla</button>
      <ul>
        {table.map((value, index) => (
          <li key={index}>{number} x {index + 1} = {value}</li>
        ))}
      </ul>
    </div>
  );
};

export default MultiplicationTable;