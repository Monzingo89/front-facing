import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // assuming you're using React Router

const paragraphs = [
  `Virtual Commerce Ventures (VCV) is pioneering the next leap in digital trade by replacing outdated eCommerce systems with a fully immersive, vCommerce experience—built on transparency, fairness, and real-time integrity.`,
  `Through our flagship platform, Zing, we are transforming the entire lifecycle of collectible trading. From the moment a product leaves the factory to the instant it reaches the buyer’s hands, Zing ensures every item is tamper-proof, traceable, and verifiably authentic.`,
  `Every listing on our platform supports AI-driven grading with two-decimal precision, allowing collectors to distinguish between a 9.67 and a 9.89—because details matter.`,
  `Grading is democratized through certified phone-based scanning, branded as RJM Vision (iOS) and MZ Optic One (Android), with an optional kit to ensure consistency.`,
  `Sellers are rewarded for performance—not tenure. Top performers pay as little as 0% in fees. Every shipment is tracked closer than Amazon using embedded smart tracking.`,
  `Buyers can interact with listings in mobile, desktop, or VR—zooming into high-res photos or virtually spinning a card in the shop.`,
  `Through our Zing Originals initiative, we’ll give back—funding access to collectibles for underserved kids through our original, charitable card line.`,
  `This isn’t about modernizing old systems. It’s about replacing them—with something better, fairer, and future-proof.`,
  `This is Virtual Commerce Ventures. This is the beginning of Zing.`,
];

export default function About() {
  const navigate = useNavigate(); // for the Home button
  const [step, setStep] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (step < paragraphs.length && charIndex < paragraphs[step].length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + paragraphs[step][charIndex]);
        setCharIndex((i) => i + 1);
      }, 10); // typing speed

      return () => clearTimeout(timeout);
    }
  }, [charIndex, step]);

  const handleNext = () => {
    if (step + 1 < paragraphs.length) {
      setStep(step + 1);
      setCharIndex(0);
      setDisplayedText('');
    }
  };

  const handleHome = () => {
    navigate('/');
  };

  return (
    <div
      style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '2rem',
        fontFamily: 'Arial, sans-serif',
        lineHeight: 1.8,
        color: '#ffffff',
        backgroundColor: '#0a0a0a',
        borderRadius: '10px',
        boxShadow: '0 0 15px rgba(128,0,128,0.3)',
      }}>
      <h1 style={{ color: '#b682ff', marginBottom: '1.5rem' }}>
        About Virtual Commerce Ventures (VCV)
      </h1>

      <p style={{ whiteSpace: 'pre-wrap', minHeight: '160px' }}>
        {displayedText}
      </p>

      {charIndex === paragraphs[step]?.length &&
        step + 1 < paragraphs.length && (
          <button
            onClick={handleNext}
            style={{
              marginTop: '1rem',
              padding: '0.75rem 1.5rem',
              backgroundColor: '#b682ff',
              color: '#0a0a0a',
              border: 'none',
              borderRadius: '6px',
              fontSize: '1rem',
              cursor: 'pointer',
            }}>
            Next
          </button>
        )}

      {charIndex === paragraphs[step]?.length &&
        step + 1 === paragraphs.length && (
          <button
            onClick={handleHome}
            style={{
              marginTop: '2rem',
              padding: '0.75rem 1.5rem',
              backgroundColor: '#ffffff',
              color: '#0a0a0a',
              border: 'none',
              borderRadius: '6px',
              fontSize: '1rem',
              cursor: 'pointer',
            }}>
            Home
          </button>
        )}
    </div>
  );
}
