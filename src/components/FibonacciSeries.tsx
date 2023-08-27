import React, { useState } from 'react';

const FibonacciSeries: React.FC = () => {
  // Estado para almacenar el número de elementos y la serie de Fibonacci generada
  const [count, setCount] = useState('');
  const [fibonacciSeries, setFibonacciSeries] = useState<number[]>([]);

  // Función para generar la serie de Fibonacci
  const generateFibonacci = (n: number): number[] => {
    const series: number[] = [0, 1];
    for (let i = 2; i < n; i++) {
      series.push(series[i - 1] + series[i - 2]);
    }
    return series;
  };

  // Manejador para generar la serie cuando se presiona el botón
  const handleGenerateSeries = () => {
    const parsedCount = parseInt(count);
    const series = generateFibonacci(parsedCount);
    setFibonacciSeries(series);
  };

  return (
    <div>
      {/* Input para ingresar el número de elementos */}
      <input
        type="number"
        value={count}
        onChange={(e) => setCount(e.target.value)}
      />
      {/* Botón para generar la serie y mostrar los resultados */}
      <button onClick={handleGenerateSeries}>Generar Serie</button>
      <div>Series de Fibonacci: {fibonacciSeries.join(', ')}</div>
    </div>
  );
};

export default FibonacciSeries;
