import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function WaveText() {
  const line1 = "I'm Kaung Khant Nay";
  const line2 = "a Full Stack Web Developer";

  return (
    <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
      <span className="block text-green-400">
        <ScrambleText text={line1} delay={0} />
      </span>
      <span className="mt-2 block text-white">
        <ScrambleText text={line2} delay={0.5} />
      </span>
      <span className="mt-4 block text-base font-semibold tracking-normal text-neutral-300 sm:text-lg">
        You can call me Nay.
      </span>
    </h1>
  );
}

function ScrambleText({ text, delay = 0 }) {
  const shouldReduceMotion = useReducedMotion();
  const [displayText, setDisplayText] = useState('');
  
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
  
  useEffect(() => {
    if (shouldReduceMotion) {
      return undefined;
    }

    let iteration = 0;
    const maxIterations = text.length * 2; // Scramble twice per character
    
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayText(
          text
            .split('')
            .map((char, index) => {
              if (index < iteration / 2 || char === ' ') {
                return char;
              }

              return characters[Math.floor(Math.random() * characters.length)];
            })
            .join('')
        );
        
        iteration++;
        
        if (iteration > maxIterations) {
          clearInterval(interval);
          setDisplayText(text);
        }
      }, 30); // Speed of scramble effect
      
      return () => clearInterval(interval);
    }, delay * 1000);
    
    return () => clearTimeout(timeout);
  }, [text, delay, shouldReduceMotion]);
  
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay }}
      className="inline-block"
    >
      {shouldReduceMotion ? text : displayText}
    </motion.span>
  );
}
