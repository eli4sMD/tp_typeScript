import React, { useState } from 'react';

const WordCounter: React.FC = () => {
  // Estado para almacenar la oración y la cantidad de palabras
  const [sentence, setSentence] = useState('');
  const [wordCount, setWordCount] = useState(0);

  // Función para contar palabras en una oración
  const countWords = (text: string): number => {
    const words = text.split(' ');
    return words.length;
  };

  // Manejador para contar palabras cuando se presiona el botón
  const handleCountWords = () => {
    // Llamo a la función countWords para obtener la cantidad de palabras
    const countedWords = countWords(sentence);
    // Actualiza el estado con la cantidad de palabras contadas
    setWordCount(countedWords);
  };

  return (
    <div>
      {/* Input para ingresar la oración */}
      <input
        type="text"
        value={sentence}
        onChange={(e) => setSentence(e.target.value)}
      />
      {/* Botón para contar palabras y mostrar el resultado */}
      <button onClick={handleCountWords}>Contar Palabras</button>
      <div>Cantidad de palabras: {wordCount}</div>
    </div>
  );
};

export default WordCounter;
