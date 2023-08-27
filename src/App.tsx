import React, { useState, ReactNode } from 'react';
import Calculator from './components/Calculator';
import EvenOddCounter from './components/EvenOddCounter';
import MultiplicationTable from './components/MultiplicationTable';
import FibonacciSeries from './components/FibonacciSeries';
import TemperatureConverter from './components/TemperatureConverter';
import WordCounter from './components/WordCounter';

const App: React.FC = () => {
  // Estado para almacenar el componente seleccionado
  const [selectedComponent, setSelectedComponent] = useState<ReactNode | null>(null);

  // Función para renderizar el componente seleccionado
  const renderSelectedComponent = (component: ReactNode) => {
    setSelectedComponent(component);
  };

  return (
    <div>
      <h1>Selecciona un Componente</h1>
      {/* Botones para seleccionar un componente */}
      <button onClick={() => renderSelectedComponent(<Calculator />)}>Calculadora</button>
      <button onClick={() => renderSelectedComponent(<EvenOddCounter />)}>Contador de Pares e Impares</button>
      <button onClick={() => renderSelectedComponent(<MultiplicationTable />)}>Tabla de Multiplicar</button>
      <button onClick={() => renderSelectedComponent(<FibonacciSeries />)}>Serie de Fibonacci</button>
      <button onClick={() => renderSelectedComponent(<TemperatureConverter />)}>Convertidor de Temperatura</button>
      <button onClick={() => renderSelectedComponent(<WordCounter />)}>Contador de Palabras</button>

      {/* Mostrar el componente seleccionado */}
      {selectedComponent}
    </div>
  );
};

export default App;