import React from 'react';
import './index.css'
import Calculator from './components/Calculator';
import EvenOddCounter from './components/EvenOddCounter';
import MultiplicationTable from './components/MultiplicationTable';
import FibonacciSeries from './components/FibonacciSeries';
import TemperatureConverter from './components/TemperatureConverter';
import WordCounter from './components/WordCounter';

const App: React.FC = () => {
  return (
    <div className='div'>
      <h1>Calculadora Simple</h1>
      <Calculator />

      <h1>Contador de Números Pares e Impares</h1>
      <EvenOddCounter />

      <h1>Tabla de Multiplicar</h1>
      <MultiplicationTable />

      <h1>Serie de Fibonacci</h1>
      <FibonacciSeries />

      <h1>Convertidor de Temperatura</h1>
      <TemperatureConverter />

      <h1>Contador de Palabras</h1>
      <WordCounter />
    </div>
  );
};

export default App;
