import React, { useState } from 'react';
import { Operator } from '../types/calculatorTypes';
import { calculate } from '../utils/mathUtils';

const Calculator: React.FC = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operator, setOperator] = useState<Operator>('suma');
  const [result, setResult] = useState<number | undefined>(undefined);

  const handleCalculate = () => {
    const parsedNum1 = parseFloat(num1);
    const parsedNum2 = parseFloat(num2);
    const calculatedResult = calculate(parsedNum1, parsedNum2, operator);
    setResult(calculatedResult);
  };

  return (
    <div>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <select
        value={operator}
        onChange={(e) => setOperator(e.target.value as Operator)}
      >
        <option value="suma">Suma</option>
        <option value="resta">Resta</option>
        <option value="multiplicación">Multiplicación</option>
        <option value="división">División</option>
      </select>
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <button onClick={handleCalculate}>Calcular</button>
      <div>Resultado: {result}</div>
    </div>
  );
};

export default Calculator;
