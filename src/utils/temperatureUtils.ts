import { TemperatureType } from '../types/temperatureTypes';

export function convertTemperature(value: number, from: TemperatureType, to: TemperatureType): number {
  if (from === 'Celsius' && to === 'Fahrenheit') {
    return (value * 9/5) + 32;
  } else if (from === 'Fahrenheit' && to === 'Celsius') {
    return (value - 32) * 5/9;
  } else {
    throw new Error('Conversión no válida.');
  }
}
