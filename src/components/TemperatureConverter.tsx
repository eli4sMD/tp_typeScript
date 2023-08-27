import React, { useState } from 'react';
import { convertTemperature } from '../utils/temperatureUtils';
import { TemperatureType } from '../types/temperatureTypes';

const TemperatureConverter: React.FC = () => {
  // Estado para almacenar el valor de la temperatura, los tipos de temperatura y el valor convertido
  const [temperatureValue, setTemperatureValue] = useState('');
  const [fromTemperatureType, setFromTemperatureType] = useState<TemperatureType>('Celsius');
  const [toTemperatureType, setToTemperatureType] = useState<TemperatureType>('Fahrenheit');
  const [convertedValue, setConvertedValue] = useState<number | undefined>(undefined);

  // Manejador para realizar la conversión cuando se presiona el botón "Convertir"
  const handleConvert = () => {
    // Convertir el valor de la temperatura a número
    const parsedTemperatureValue = parseFloat(temperatureValue);

    // Realiza la conversión utilizando la función "convertTemperature"
    const converted = convertTemperature(parsedTemperatureValue, fromTemperatureType, toTemperatureType);

    // Actualiza el estado con el valor convertido
    setConvertedValue(converted);
  };

  return (
    <div>
      {/* Input y selects para el valor de la temperatura y los tipos de temperatura */}
      <input
        type="number"
        value={temperatureValue}
        onChange={(e) => setTemperatureValue(e.target.value)}
      />
      <select
        value={fromTemperatureType}
        onChange={(e) => setFromTemperatureType(e.target.value as TemperatureType)}
      >
        <option value="Celsius">Celsius</option>
        <option value="Fahrenheit">Fahrenheit</option>
      </select>
      <select
        value={toTemperatureType}
        onChange={(e) => setToTemperatureType(e.target.value as TemperatureType)}
      >
        <option value="Celsius">Celsius</option>
        <option value="Fahrenheit">Fahrenheit</option>
      </select>
      {/* Botón para realizar la conversión y mostrar el valor convertido */}
      <button onClick={handleConvert}>Convertir</button>
      <div>Valor convertido: {convertedValue} {toTemperatureType}</div>
    </div>
  );
};

export default TemperatureConverter;
