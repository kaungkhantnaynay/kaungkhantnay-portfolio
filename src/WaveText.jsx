import React from 'react';
import './wave.css';

export default function WaveText() {

  const line1 = "I'm Kaung Khant Nay";
  const line2 = "a Full Stack Web Developer";

  const renderWave = (text) =>
    text.split("").map((char, index) => (
      <span key={index} style={{ animationDelay: `${index * 0.1}s` }} className='inline-block'>
        {char === " " ? "\u00A0" : char}
      </span>
    ));

  return (
    <h2 className="text-xl sm:text-4xl md:text-5xl leading-[1.5] font-extrabold text-green-700 mt-10 wave-text text-center">
      <div className='whitespace-nowrap'>
      {renderWave(line1)}
      </div>
      <br />
      <div className='mt-2 whitespace-nowrap'>
      {renderWave(line2)}
      </div>
    </h2>
  );
}

