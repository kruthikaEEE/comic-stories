import React from "react";
import { useNavigate } from 'react-router-dom';
import CME1 from '../assets/CME1.png';
import CuteCommie from '../assets/cute commie.png';
import FierceCommie from '../assets/FierceCommie.png';
import Meteror from '../assets/meteror.mp4';

const StoryPage = () => {
  const navigate = useNavigate();
  const handleChoice = (choice) => {
    if (choice === 'gentle') {
      navigate('/story/cammie-cme/gentle');
    } else if (choice === 'wild') {
      navigate('/story/cammie-cme/fierce');
    }
  };

  return (
    <div
      className="min-h-screen relative flex flex-col items-center justify-start py-12 px-4 font-[Comic_Sans_MS] mt-8 overflow-hidden"
      style={{
        background: 'radial-gradient(circle at 20% 20%, #0a0b2a 0%, #000 100%)',
      }}
    >
      {/* Decorative stars */}
      <div className="pointer-events-none select-none absolute inset-0 z-0">
        {[...Array(60)].map((_, i) => (
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

      {/* Top row: Split left image, right message */}
      <div className="flex flex-col md:flex-row w-full max-w-4xl mx-auto mb-10 min-h-[320px] z-10">
        {/* Left half: one big image */}
        <div className="flex-1 flex items-center justify-center min-h-[420px]">
          <img
            src={CME1}
            alt="Cammie the CME"
            className="h-[420px] w-[420px] object-cover rounded-3xl shadow-2xl border-4 border-pink-300"
            style={{ maxHeight: '480px', maxWidth: '480px' }}
          />
        </div>
        {/* Right half: message */}
        <div className="flex-1 flex items-center justify-center">
          <div className="relative border-4 border-gray-600 rounded-3xl px-12 py-10 shadow-2xl text-2xl font-bold text-gray-100 leading-snug max-w-xl w-full text-left min-h-[420px] flex items-center overflow-hidden" style={{ background: 'transparent' }}>
            {/* Meteor video background */}
            <video
              src={Meteror}
              className="absolute inset-0 w-full h-full object-cover rounded-3xl"
              autoPlay
              loop
              muted
              playsInline
              style={{ zIndex: 0 }}
            />
            {/* Overlay for readability */}
            <div className="absolute inset-0 rounded-3xl" style={{ background: 'rgba(0,0,0,0.6)', zIndex: 1 }} />
            <div className="relative z-10">
              Hiya! 🥳 I’m Cammie the CME — that stands for Coronal Mass Ejection. Whoa, big words, right? Don’t worry, I can barely say them myself! 😅 Most of my friends just call me Cammie, the Sun’s sneeze spark. 🤧⚡
            </div>
          </div>
        </div>
      </div>

      {/* Middle text */}
      <p className="text-2xl text-white font-bold text-center mb-12 leading-relaxed z-10">
        Today I’m travelling to Earth! Whoa. Let’s go. But I’m confused what path should I take?
      </p>

      {/* Choices row */}
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center z-10">
        {/* Left choice */}
        <div className="flex flex-col items-center">
          <button
            onClick={() => handleChoice('gentle')}
            className="flex flex-row items-center w-[480px] h-[200px] px-8 py-6 bg-white/20 border-4 border-pink-500 rounded-3xl shadow-2xl mb-4 transition-transform hover:scale-105 text-white font-bold"
            style={{ cursor: 'pointer' }}
          >
            <img
              src={CuteCommie}
              alt="Cool CME"
              className="w-32 h-32 object-contain mr-6"
            />
            <span className="text-4xl font-bold text-pink-300 text-left leading-snug">
              A soft path <br /> to Earth!
            </span>
          </button>
        </div>

        {/* Right choice */}
        <div className="flex flex-col items-center">
          <button
            onClick={() => handleChoice('wild')}
            className="flex flex-row items-center w-[480px] h-[200px] px-8 py-6 bg-white/20 border-4 border-yellow-500 rounded-3xl shadow-2xl mb-4 transition-transform hover:scale-105 text-white font-bold"
            style={{ cursor: 'pointer' }}
          >
            <img
              src={FierceCommie}
              alt="Fierce CME"
              className="w-32 h-32 object-contain mr-6"
            />
            <span className="text-4xl font-bold text-yellow-300 text-left leading-snug">
              Blast with a <br /> Boom!!
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StoryPage;
