import React from 'react';
import { useNavigate } from 'react-router-dom';
import marsSurfaceImg1 from '../assets/res.webp';
import marsSurfaceImg2 from '../assets/RM.webp';
import marsAstroImg from '../assets/astraM.webp';

const MarsSurf = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-b from-black via-red-900 to-orange-900 pt-32 px-4 relative overflow-hidden">

      {/* Optional Twinkling Stars Background */}
      <div className="absolute inset-0 z-0">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>

      {/* Top Big Container */}
      <div className="flex w-full h-[50vh] mb-4 z-10">
        {/* Left: Image */}
        <div className="w-1/2 flex items-center justify-center">
          <img
            src={marsSurfaceImg1}
            alt="Mars Surface 1"
            className="w-full h-full object-cover rounded-3xl shadow-lg border border-red-400/40"
          />
        </div>

        {/* Right: Paragraph */}
        <div className="w-1/2 flex items-center justify-center p-6">
          <p className="text-white text-lg bg-white/10 backdrop-blur-sm p-6 rounded-3xl shadow-lg leading-relaxed">
            Raye explores the Martian surface and spots tiny chemical reactions in the soil and rocks.
            It sends back observations to scientists on Earth to study molecules that hint at past life.
            Raye’s data helps understand how water and chemicals move on Mars.
            Thanks to Raye, researchers get a closer look at Mars’ secrets! 🚀🪐
          </p>
        </div>
      </div>

      {/* Bottom Big Container */}
      <div className="flex w-full h-[50vh] mb-6 z-10">
        {/* Left: Image */}
        <div className="w-1/2 flex items-center justify-center">
          <img
            src={marsSurfaceImg2}
            alt="Mars Surface 2"
            className="w-full h-full object-cover rounded-3xl shadow-lg border border-orange-400/40"
          />
        </div>

        {/* Right: Paragraph */}
        <div className="w-1/2 flex items-center justify-center p-6">
          <p className="text-white text-lg bg-white/10 backdrop-blur-sm p-6 rounded-3xl shadow-lg leading-relaxed">
            Wow! The Martian soil is sparkling with tiny reactions! I can see molecules dancing around—maybe signs of past life! 
            I’ll send all my discoveries back to Earth so the scientists can learn more about Mars. Yay! 
            I’m helping humans explore the Red Planet! 🪐✨
          </p>
        </div>
      </div>

      {/* Floating Card */}
      <div className="w-full max-w-5xl mb-8 animate-float-card z-10">
        <div className="flex bg-white/10 rounded-2xl shadow-lg overflow-hidden border border-yellow-400/40 backdrop-blur-sm">
          {/* Left Image 1/4 */}
          <div className="w-1/4 flex items-center justify-center p-4 bg-white/5">
            <img src={marsAstroImg} alt="Astronaut" className="w-full h-auto rounded-full" />
          </div>

          {/* Right Text 3/4 */}
          <div className="w-3/4 p-4 flex items-center">
            <p className="text-white text-lg leading-relaxed">
              Astronauts carefully observe the Martian terrain. Even though Raye’s cosmic energy makes power flicker, 
              their shields keep them safe. Every step on Mars teaches humans how to live and explore on a new world! 🌌🚀
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Button */}
      <button
        onClick={() => navigate('/mars')}
        className="bg-gradient-to-r from-indigo-900 via-purple-800 to-blue-900 text-white font-bold py-4 px-8 rounded-full 
                   shadow-lg hover:shadow-blue-400/50 hover:scale-105 transition-transform z-10 border border-blue-500/40"
      >
        🔄 Let's try different path
      </button>

      {/* Floating Animation & Starfield */}
      <style>
        {`
          @keyframes floatCard {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-12px); }
          }
          .animate-float-card {
            animation: floatCard 5s ease-in-out infinite;
          }

          /* Starry Background */
          .stars, .stars2, .stars3 {
            position: absolute;
            width: 100%;
            height: 100%;
            background-repeat: repeat;
            top: 0;
            left: 0;
          }

          .stars {
            background-image: radial-gradient(white 1px, transparent 1px);
            background-size: 3px 3px;
            animation: twinkle 10s linear infinite;
          }
          .stars2 {
            background-image: radial-gradient(white 1px, transparent 1px);
            background-size: 2px 2px;
            animation: twinkle 15s linear infinite;
            opacity: 0.6;
          }
          .stars3 {
            background-image: radial-gradient(white 1px, transparent 1px);
            background-size: 1px 1px;
            animation: twinkle 20s linear infinite;
            opacity: 0.3;
          }

          @keyframes twinkle {
            from { transform: translateY(0); }
            to { transform: translateY(-100px); }
          }
        `}
      </style>
    </div>
  );
};

export default MarsSurf;
