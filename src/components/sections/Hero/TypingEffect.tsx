import React, { useState, useEffect } from 'react';

const TypingEffect = ({ words }: { words: string[] }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[wordIndex];
      const updatedText = isDeleting
        ? currentWord.substring(0, displayedText.length - 1)
        : currentWord.substring(0, displayedText.length + 1);

      setDisplayedText(updatedText);

      if (!isDeleting && updatedText === currentWord) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }

      setTypingSpeed(isDeleting ? 50 : 150);
    };

    const typingTimeout = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(typingTimeout);
  }, [displayedText, isDeleting, typingSpeed, words, wordIndex]);

  useEffect(() => {
    const cursorBlink = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorBlink);
  }, []);

  return (
    <span>
      {displayedText}
      <span className={`inline-block w-1 bg-white ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}>|</span>
    </span>
  );
};

export default TypingEffect;