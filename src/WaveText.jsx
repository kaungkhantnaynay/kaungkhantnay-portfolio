import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function WaveText() {
  const line1 = "I'm Kaung Khant Nay";
  const line2 = "a Full Stack Web Developer";

  return (
    <h2 className="text-xl sm:text-4xl md:text-5xl leading-[1.5] font-extrabold text-green-700 mt-10 text-center">
      <div className='whitespace-nowrap'>
        <ScrambleText text={line1} delay={0} />
      </div>
      <br />
      <div className='mt-2 whitespace-nowrap'>
        <ScrambleText text={line2} delay={0.5} />
      </div>
    </h2>
  );
}

function ScrambleText({ text, delay = 0 }) {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
  
  useEffect(() => {
    let iteration = 0;
    const maxIterations = text.length * 2; // Scramble twice per character
    
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayText(prevText => {
          return text
            .split('')
            .map((char, index) => {
              // If we've reached this character's reveal point
              if (index < iteration / 2) {
                return char;
              }
              
              // Show space as space
              if (char === ' ') {
                return ' ';
              }
              
              // Otherwise scramble
              return characters[Math.floor(Math.random() * characters.length)];
            })
            .join('');
        });
        
        iteration++;
        
        if (iteration > maxIterations) {
          clearInterval(interval);
          setDisplayText(text);
          setIsComplete(true);
        }
      }, 30); // Speed of scramble effect
      
      return () => clearInterval(interval);
    }, delay * 1000);
    
    return () => clearTimeout(timeout);
  }, [text, delay]);
  
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay }}
      className="inline-block"
    >
      {displayText}
    </motion.span>
  );
}

