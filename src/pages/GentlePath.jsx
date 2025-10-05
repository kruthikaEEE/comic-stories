import React from "react";
import { useNavigate } from 'react-router-dom';
import Cammie1 from '../assets/Cammie1.mp4';

const GentlePath = () => {
  const navigate = useNavigate();
  const handleMagic = () => {
    navigate('/story/cammie-cme/gentle/aurora-magic');
  };
  return (
    <div
      className="min-h-screen flex flex-row items-center justify-center py-12 px-4 font-[Comic_Sans_MS] relative overflow-hidden mt-8"
      style={{
        background: 'radial-gradient(circle at 30% 20%, #0a0b2a 0%, #000 100%)',
      }}
    >
      {/* Decorative stars */}
      <div className="pointer-events-none select-none absolute inset-0 z-0">
        {[...Array(80)].map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              background: 'white',
              borderRadius: '50%',
              opacity: Math.random() * 0.7 + 0.3,
              filter: 'blur(0.5px)',
            }}
          />
        ))}
      </div>

      {/* Left: Animation */}
      <div className="flex-1 flex flex-col items-center justify-center h-full z-10">
        <div className="w-[340px] h-[340px] bg-white/20 border-4 border-blue-400 rounded-3xl flex items-center justify-center shadow-xl overflow-hidden">
          <video
            src={Cammie1}
            className="w-full h-full object-cover rounded-3xl"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </div>

      {/* Right: Speech bubbles */}
      <div className="flex-1 flex flex-col items-center justify-center h-full z-10">
        {/* Main speech bubble */}
        <div className="bg-white/20 border-4 border-purple-400 rounded-3xl px-10 py-8 shadow-xl text-2xl font-bold text-white leading-snug max-w-2xl w-full text-center mb-8">
          Psst... Earth! Don't worry, I'm sneaking by softly...<br />
          I'm gonna paint your poles with sparkly, dancing light!<br />
          Pretty, huh?
        </div>
        {/* Magic button */}
        <div className="mt-4 flex justify-center w-full">
          <button
            onClick={handleMagic}
            className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 border-4 border-pink-400 rounded-2xl px-12 py-6 shadow text-3xl font-bold text-white text-center transition-transform hover:scale-105 focus:outline-none"
          >
            Let's see the magic!
          </button>
        </div>
      </div>
    </div>
  );
};

export default GentlePath;
