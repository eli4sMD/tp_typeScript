import { Operator } from '../types/calculatorTypes';

export function calculate(num1: number, num2: number, operator: Operator): number {
  switch (operator) {
    case 'suma':
      return num1 + num2;
    case 'resta':
      return num1 - num2;
    case 'multiplicación':
      return num1 * num2;
    case 'división':
      if (num2 !== 0) {
        return num1 / num2;
      } else {
        throw new Error('No se puede dividir por cero.');
      }
    default:
      throw new Error('Operador no válido.');
  }
}
