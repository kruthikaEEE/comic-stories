import React from 'react';
import { useNavigate } from 'react-router-dom';
import rayeImg from '../assets/Raye.webp';
import satIcon from '../assets/satellite.webp';
import cammieIcon from '../assets/CME1.webp';

const Raye = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start pt-32 px-4 overflow-hidden">

      {/* Starry Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-indigo-950 to-blue-900">
        <div className="absolute inset-0 bg-[radial-gradient(white,transparent_2px)] bg-[length:4px_4px] opacity-30 animate-twinkle"></div>
      </div>

      {/* Content Section */}
      <div className="relative z-10 max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        {/* Raye Image */}
        <div className="bg-white/10 border-4 border-blue-700 rounded-3xl h-64 md:h-full overflow-hidden shadow-lg animate-float-slow">
          <img
            src={rayeImg}
            alt="Raye"
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>

        {/* Intro Card */}
        <div className="bg-white/10 border-4 border-pink-400 rounded-3xl p-8 shadow-lg animate-float-medium">
          <h2 className="text-3xl font-bold text-pink-300 mb-2">Meet Raye ✨</h2>
          <p className="text-gray-200 leading-relaxed">
            Hey there, star gazer! 🌠 I’m <span className="text-yellow-300 font-semibold">Raye</span> — born from a super-duper exploding star! 💥  
            I’m small, speedy, and love zooming across the universe at almost light speed! 🚀  
            I race through galaxies, bounce off planets, and tickle magnetic fields just for fun! 😄  
            Catch me if you can… though, spoiler alert — you probably can’t! 💫
          </p>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="relative z-10 w-full max-w-4xl mx-auto mt-10 flex items-center justify-center">
        <div className="flex flex-col sm:flex-row gap-6 w-full">
          {/* Earth Button */}
          <button
            onClick={() => navigate('/earth')}
            className="w-full sm:w-1/2 bg-gradient-to-r from-[#0b3d56] to-[#0f6b5f] hover:from-[#1b5d76] hover:to-[#1d8b7a] text-white font-extrabold text-lg py-4 rounded-full shadow-[0_0_20px_rgba(0,255,255,0.6)] transition-transform hover:scale-105 flex items-center justify-center gap-3"
          >
            <img src={satIcon} alt="sat" className="w-7 h-7" />
            Let's visit Earth 🌍
          </button>

          {/* Mars Button */}
          <button
            onClick={() => navigate('/mars')}
            className="w-full sm:w-1/2 bg-gradient-to-r from-[#2c1b6f] to-[#5b23b4] hover:from-[#3e27a5] hover:to-[#8236df] text-white font-extrabold text-lg py-4 rounded-full shadow-[0_0_20px_rgba(180,0,255,0.5)] transition-transform hover:scale-105 flex items-center justify-center gap-3"
          >
            <img src={cammieIcon} alt="mars" className="w-7 h-7" />
            Zoom to Mars 🔴
          </button>
        </div>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes floatSlow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          @keyframes floatMedium {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
          }
          .animate-float-slow {
            animation: floatSlow 7s ease-in-out infinite;
          }
          .animate-float-medium {
            animation: floatMedium 6s ease-in-out infinite;
          }

          @keyframes twinkle {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 0.6; }
          }
          .animate-twinkle {
            animation: twinkle 5s ease-in-out infinite alternate;
          }
        `}
      </style>
    </div>
  );
};

export default Raye;
