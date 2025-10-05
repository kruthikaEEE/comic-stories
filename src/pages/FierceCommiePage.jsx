import React from "react";
import { useNavigate } from 'react-router-dom';
import fierceCammie from '../assets/fierceCammie.mp4';
import FierceCommie from '../assets/FierceCommie.png';
import earthImg from '../assets/earth1.jpg';
import satelliteImg from '../assets/satellite.png';

const FierceCommiePage = () => {
  const navigate = useNavigate();
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-start py-12 px-4 font-[Comic_Sans_MS] relative overflow-hidden"
      style={{
        background: 'radial-gradient(circle at 30% 30%, #0a0b2a 0%, #000 100%)',
      }}
    >
      {/* Decorative stars */}
      <div className="pointer-events-none select-none absolute inset-0 z-0">
        {[...Array(100)].map((_, i) => (
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

      {/* Top: Fierce Cammie animation */}
      <div
        className="w-full max-w-3xl mx-auto bg-white/20 border-4 border-yellow-400 rounded-3xl shadow-xl flex items-center justify-center mb-8 mt-6 z-10"
        style={{ height: '340px' }}
      >
        <video
          src={fierceCammie}
          className="w-full h-full object-cover rounded-3xl"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      {/* Bottom row: Earth image and speech bubble */}
      <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto gap-8 mt-8 z-10">
        {/* Left half: Earth image and paragraph */}
        <div className="flex-1 flex flex-col items-center justify-center gap-4">
          <img
            src={earthImg}
            alt="Earth"
            className="w-44 h-44 object-cover rounded-full border-4 border-blue-400 shadow-lg bg-white"
          />
          <div
            className="relative bg-white/20 border-4 border-yellow-400 rounded-3xl px-10 py-4 shadow-xl text-2xl font-bold text-yellow-400 w-full text-center"
            style={{ fontFamily: 'Comic Sans MS, Comic Sans, cursive', minHeight: '100px' }}
          >
            Wheeeeee! 🌠💨 Hold on tight, Earth! I’m coming in super-duper turbo zoom mode! 💥 Hehehe, here I come—ZOOM-BOOM-BLOOM! 🌍
          </div>
        </div>

        {/* Right half: Satellite image and paragraph */}
        <div className="flex-1 flex flex-col items-center justify-center gap-4">
          <img
            src={satelliteImg}
            alt="Satellite"
            className="w-44 h-44 object-cover rounded-full border-4 border-gray-400 shadow-lg bg-white"
          />
          <div
            className="relative bg-white/20 border-4 border-gray-300 rounded-3xl px-10 py-4 shadow-xl text-2xl font-bold text-gray-200 w-full text-center"
            style={{ fontFamily: 'Comic Sans MS, Comic Sans, cursive', minHeight: '100px' }}
          >
            "Hey! Watch where you’re zooming, Cammie! 😤🛰️ I’ve got important Earth selfies to send back!"
          </div>
        </div>
      </div>

      {/* Bottom navigation buttons */}
      <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mt-12 mb-4 w-full z-10">
        <button
          className="bg-blue-900/30 hover:bg-blue-800/40 text-white font-bold py-4 px-8 rounded-2xl shadow-lg text-2xl transition-all border-2 border-blue-400"
          onClick={() => navigate('/story/cammie-cme/gentle/aurora-magic')}
        >
          Ease into the skies
        </button>
        <button
          className="bg-yellow-700/30 hover:bg-yellow-600/40 text-white font-bold py-4 px-8 rounded-2xl shadow-lg text-2xl transition-all border-2 border-yellow-400"
          onClick={() => navigate('/story/cammie-cme/zoom-full-throttle')}
        >
          Zoom full throttle! ⚡
        </button>
      </div>
    </div>
  );
};

export default FierceCommiePage;
