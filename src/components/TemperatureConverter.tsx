import React, { useState } from 'react';
import { convertTemperature } from '../utils/temperatureUtils';
import { TemperatureType } from '../types/temperatureTypes';

const TemperatureConverter: React.FC = () => {
  const [value, setValue] = useState('');
  const [from, setFrom] = useState<TemperatureType>('Celsius');
  const [to, setTo] = useState<TemperatureType>('Fahrenheit');
  const [convertedValue, setConvertedValue] = useState<number | undefined>(undefined);

  const handleConvert = () => {
    const parsedValue = parseFloat(value);
    const converted = convertTemperature(parsedValue, from, to);
    setConvertedValue(converted);
  };

  return (
    <div>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <select
        value={from}
        onChange={(e) => setFrom(e.target.value as TemperatureType)}
      >
        <option value="Celsius">Celsius</option>
        <option value="Fahrenheit">Fahrenheit</option>
      </select>
      <select
        value={to}
        onChange={(e) => setTo(e.target.value as TemperatureType)}
      >
        <option value="Celsius">Celsius</option>
        <option value="Fahrenheit">Fahrenheit</option>
      </select>
      <button onClick={handleConvert}>Convertir</button>
      <div>Valor convertido: {convertedValue} {to}</div>
    </div>
  );
};

export default TemperatureConverter;