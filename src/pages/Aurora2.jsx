import React from "react";
import { Link } from 'react-router-dom';
import AuroraGif from '../assets/aurora-gif.gif';
import CuteCommie from '../assets/cute commie.png';

const Aurora2Page = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-between relative py-12 px-4 font-[Comic_Sans_MS] mt-8 w-full overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at top, #0b0c28 0%, #000 100%)',
      }}
    >

      {/* Aurora GIF Section */}
      <div
        className="w-full max-w-5xl mx-auto bg-white/10 border-4 border-blue-400 rounded-3xl shadow-xl flex items-center justify-center mb-4 mt-2 z-10"
        style={{ height: '520px' }}
      >
        <img
          src={AuroraGif}
          alt="Aurora animation"
          className="w-full h-full object-cover rounded-3xl shadow-lg"
        />
      </div>

      {/* Dialogue Box */}
      <div className="w-full flex justify-center mt-4 z-10">
        <div
          className="relative border-4 border-purple-400 rounded-3xl px-12 py-8 shadow-xl text-2xl font-bold text-purple-200 max-w-4xl w-full text-center bg-gradient-to-r from-indigo-700 via-purple-800 to-black/50 backdrop-blur-sm"
        >
          <img
            src={CuteCommie}
            alt="Cammie"
            className="absolute -top-8 right-8 w-20 h-20 object-contain drop-shadow-xl border-2 border-white rounded-full bg-white"
            style={{ zIndex: 2 }}
          />
          Behold — a softer, twinkling aurora. Cammie says: enjoy the colors and remember — mischief can be magical!
        </div>
      </div>

      {/* Bottom Button */}
      <div className="w-full flex justify-center mt-6 z-10">
        <Link to="/story/cammie-cme">
          <button className="bg-gradient-to-r from-purple-500 to-indigo-700 text-white font-bold px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-transform border-2 border-white">
            Choose a different path
          </button>
        </Link>
      </div>

      {/* Optional floating stars */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-70"
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `twinkle ${Math.random() * 2 + 1}s infinite alternate`,
            }}
          />
        ))}
      </div>

      <style>
        {`
          @keyframes twinkle {
            from { opacity: 0.3; transform: scale(1); }
            to { opacity: 1; transform: scale(1.3); }
          }
        `}
      </style>

    </div>
  );
};

export default Aurora2Page;
