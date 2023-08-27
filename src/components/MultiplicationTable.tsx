import React, { useState } from 'react';

const MultiplicationTable: React.FC = () => {
  // Estado para almacenar el número para la tabla de multiplicación y la cantidad de filas
  const [number, setNumber] = useState('');
  const [rows, setRows] = useState('');

  // Función para generar la tabla de multiplicación
  const generateTable = () => {
    const parsedNumber = parseInt(number);
    const parsedRows = parseInt(rows);
    const table: string[] = [];

    for (let i = 1; i <= parsedRows; i++) {
      const result = parsedNumber * i;
      table.push(`${parsedNumber} x ${i} = ${result}`);
    }

    return table;
  };

  return (
    <div>
      {/* Inputs para ingresar el número y la cantidad de filas */}
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <input
        type="number"
        value={rows}
        onChange={(e) => setRows(e.target.value)}
      />
      <div>Tabla de multiplicación:</div>
      <ul>
        {generateTable().map((entry, index) => (
          <li key={index}>{entry}</li>
        ))}
      </ul>
    </div>
  );
};

export default MultiplicationTable;
