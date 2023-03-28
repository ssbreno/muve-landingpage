'use client';
import { useState, useEffect } from 'react';
import { TextInterface } from '../../shared/interfaces/text.interfaces';

export const TypingText: React.FC<TextInterface> = ({ text, className }) => {
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (typedText.length < text.length) {
        setTypedText((prevText) => prevText + text[typedText.length]);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, [text, typedText]);

  return (
    <div className="self-center ">
      <p className="text-gray-800 mt-[-8%]">
        {typedText.split('').map((letter, i) => (
          <span
            key={i}
            className={`${className} typing ${
              i === typedText.length - 1 ? 'font-bold' : ''
            }`}
          >
            {letter}
          </span>
        ))}
      </p>
    </div>
  );
};
