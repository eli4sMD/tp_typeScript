import React, { useState } from 'react';
import { Operator } from '../types/calculatorTypes';
import { calculate } from '../utils/mathUtils';

const Calculator: React.FC = () => {
  // Estado para almacenar los valores de los operandos, el operador y el resultado
  const [operand1, setOperand1] = useState('');
  const [operand2, setOperand2] = useState('');
  const [selectedOperator, setSelectedOperator] = useState<Operator>('suma');
  const [result, setResult] = useState<number | undefined>(undefined);

  // Manejador para realizar el cálculo cuando se presiona el botón "Calcular"
  const handleCalculate = () => {
    // Convierte los operandos a números
    const parsedOperand1 = parseFloat(operand1);
    const parsedOperand2 = parseFloat(operand2);

    // Calcula el resultado utilizando la función "calculate"
    const calculatedResult = calculate(parsedOperand1, parsedOperand2, selectedOperator);

    // Actualiza el estado con el resultado calculado
    setResult(calculatedResult);
  };

  return (
    <div>
      <input
        type="number"
        value={operand1}
        onChange={(e) => setOperand1(e.target.value)}
      />
      <select
        value={selectedOperator}
        onChange={(e) => setSelectedOperator(e.target.value as Operator)}
      >
        <option value="suma">Suma</option>
        <option value="resta">Resta</option>
        <option value="multiplicación">Multiplicación</option>
        <option value="división">División</option>
      </select>
      <input
        type="number"
        value={operand2}
        onChange={(e) => setOperand2(e.target.value)}
      />
      {/* Botón para calcular y mostrar el resultado */}
      <button onClick={handleCalculate}>Calcular</button>
      <div>Resultado: {result}</div>
    </div>
  );
};

export default Calculator;
