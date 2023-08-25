import React, { useState } from 'react';

const FibonacciSeries: React.FC = () => {
  const [count, setCount] = useState('');
  const [fibonacciSeries, setFibonacciSeries] = useState<number[]>([]);

  const generateFibonacci = (n: number): number[] => {
    const series: number[] = [0, 1];
    for (let i = 2; i < n; i++) {
      series.push(series[i - 1] + series[i - 2]);
    }
    return series;
  };

  const handleGenerateSeries = () => {
    const parsedCount = parseInt(count);
    const series = generateFibonacci(parsedCount);
    setFibonacciSeries(series);
  };

  return (
    <div>
      <input
        type="number"
        value={count}
        onChange={(e) => setCount(e.target.value)}
      />
      <button onClick={handleGenerateSeries}>Generar Serie</button>
      <div>Series de Fibonacci: {fibonacciSeries.join(', ')}</div>
    </div>
  );
};

export default FibonacciSeries;
