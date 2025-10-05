import React from 'react';
import { useNavigate } from 'react-router-dom';
import auroraPic from '../assets/astranaut.png';
import auroraGif2 from '../assets/aurora-gif2.gif';

const AurorasPage = () => {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-start pt-24 px-4 overflow-hidden relative"
      style={{
        background: 'radial-gradient(circle at 20% 20%, #0a0b2a 0%, #000 100%)',
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

      {/* Top Section: Two big containers */}
      <div className="flex flex-col md:flex-row w-full h-[50vh] gap-6 mb-10 z-10">
        {/* Left Half Container with GIF */}
        <div className="w-full md:w-1/2 h-full bg-white/10 border-4 border-purple-400 rounded-3xl flex items-center justify-center overflow-hidden">
          <img
            src={auroraGif2}
            alt="Aurora Animation"
            className="w-full h-full object-cover rounded-3xl shadow-lg"
          />
        </div>

        {/* Right Half Container */}
        <div className="w-full md:w-1/2 h-full bg-white/20 border-4 border-blue-400 rounded-3xl flex items-center justify-center p-4">
          <p className="text-gray-200 text-lg text-center">
            Galactic Cosmic Rays are tiny space travelers from faraway stars! 🌟 When they zoom into Earth’s sky, they bump into air molecules high above us, making them glow with magical colors. That’s how we get beautiful dancing lights called auroras—greens, reds, blues, and purples sparkling in the night! ✨ They follow Earth’s invisible magnetic paths to the poles, creating a beautiful sky show 🎨💖
          </p>
        </div>
      </div>

      {/* Small card + floating dialogue card */}
      <div className="relative w-full max-w-5xl flex flex-col md:flex-row items-center justify-center gap-8 mb-10 z-10">
        {/* Picture Card */}
        <div className="w-64 h-64 bg-white/10 border-4 border-pink-400 rounded-2xl overflow-hidden flex items-center justify-center shadow-lg">
          <img src={auroraPic} alt="Aurora" className="w-full h-full object-cover rounded-2xl" />
        </div>

        {/* Floating Dialogue Card */}
        <div className="absolute md:relative -top-16 md:top-0 w-[32rem] bg-white/20 border-2 border-purple-500 rounded-xl p-4 shadow-lg animate-float-slow">
          <p className="text-gray-200 text-center text-lg">
            "Wow… wow… look at those lights! 🌈✨ They’re dancing in the sky! Raye… thank you, thank you so much! I’ve never seen anything so magical in my whole life! It’s like the stars are painting just for me… it’s so pretty. I wish I could stay here forever and watch them sparkle. You’re the best, Raye! My very own cosmic friend! 💖"
          </p>
        </div>
      </div>

      {/* Button to go back to EarthPage */}
      <button
        onClick={() => navigate('/earth')}
        className="mt-auto bg-gradient-to-r from-purple-400 to-pink-500 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:scale-105 transition-transform z-10"
      >
        Try another way
      </button>

      {/* Floating Animation */}
      <style>
        {`
          @keyframes floatSlow {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
          }
          .animate-float-slow {
            animation: floatSlow 6s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  );
};

export default AurorasPage;
