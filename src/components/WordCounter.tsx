import React, { useState } from 'react';

const WordCounter: React.FC = () => {
  const [sentence, setSentence] = useState('');
  const [wordCount, setWordCount] = useState(0);

  const countWords = (text: string): number => {
    const words = text.split(' ');
    return words.length;
  };

  const handleCountWords = () => {
    const count = countWords(sentence);
    setWordCount(count);
  };

  return (
    <div>
      <textarea
        value={sentence}
        onChange={(e) => setSentence(e.target.value)}
      />
      <button onClick={handleCountWords}>Contar Palabras</button>
      <div>Cantidad de palabras: {wordCount}</div>
    </div>
  );
};

export default WordCounter;
