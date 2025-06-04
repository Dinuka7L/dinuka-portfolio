import React, { useEffect, useState } from 'react';

interface Props {
  text: string;
  typeSpeed?: number;
  deleteSpeed?: number;
  pauseTime?: number;
  scrambleChars?: string;
}

const TypewriterWithScramble: React.FC<Props> = ({
  text,
  typeSpeed = 50,
  deleteSpeed = 30,
  pauseTime = 2000,
  scrambleChars = '%&1234567!<>-_\\/[]{}—=+*^?#________',
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scramble, setScramble] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let scrambleInterval: ReturnType<typeof setInterval>;
    let delayTimeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && currentIndex < text.length) {
      // Typing with scramble
      scrambleInterval = setInterval(() => {
        const randChar =
          scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
        setScramble(randChar);
      }, 20);

      delayTimeout = setTimeout(() => {
        clearInterval(scrambleInterval);
        setScramble('');
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, typeSpeed);
    } else if (!isDeleting && currentIndex === text.length) {
      // Pause before deleting
      delayTimeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseTime);
    } else if (isDeleting && currentIndex > 0) {
      // Deleting
      delayTimeout = setTimeout(() => {
        setDisplayText((prev) => prev.slice(0, -1));
        setCurrentIndex((prev) => prev - 1);
      }, deleteSpeed);
    } else if (isDeleting && currentIndex === 0) {
      // Restart typing
      delayTimeout = setTimeout(() => {
        setIsDeleting(false);
      }, 500);
    }

    return () => {
      clearInterval(scrambleInterval);
      clearTimeout(delayTimeout);
    };
  }, [currentIndex, isDeleting, text, typeSpeed, deleteSpeed, pauseTime, scrambleChars]);

  return (
    <span className="whitespace-pre">
      {displayText}
      {!isDeleting && <span className="text-blue-400">{scramble}</span>}
      <span className="animate-blink">|</span>
    </span>
  );
};

export default TypewriterWithScramble;
