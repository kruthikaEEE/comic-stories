import React from 'react';
import { useNavigate } from 'react-router-dom';
import astroImg from '../assets/M1.webp';
import astro1 from '../assets/As1.jpeg';
import astro2 from '../assets/As1.jpeg';
import astro3 from '../assets/As1.jpeg';
import astro4 from '../assets/As1.jpeg';
import astro5 from '../assets/As1.jpeg';

const dialogues = [
  { img: astro1, text: "Astronaut 1: Whoa! The instruments are flickering like starlight! 🌟" },
  { img: astro2, text: "Astronaut 2: It’s Raye again! Everyone, activate the magnetic shields! 🛡️" },
  { img: astro3, text: "Astronaut 3: Even up here, cosmic rays play tricks on our systems! ⚡" },
  { img: astro4, text: "Astronaut 4: Look at that glow—Raye’s energy looks beautiful from orbit! 💫" },
  { img: astro5, text: "Astronaut 5: She’s mischievous but helps us learn more about space radiation! 🚀" },
];

const AstraSpace = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-b from-indigo-900 via-blue-900 to-black py-12 px-4 text-white">

      {/* Top Section: Image + Paragraph */}
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
        <div className="flex items-center justify-center">
          <img
            src={astroImg}
            alt="Astronaut"
            className="w-full max-w-sm rounded-3xl shadow-[0_0_30px_rgba(147,197,253,0.5)]"
          />
        </div>

        <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl shadow-[0_0_20px_rgba(255,255,255,0.3)]">
          <p className="text-lg leading-relaxed">
            When Raye dances through space near Mars, her cosmic energy tickles the satellites and astronauts nearby. ⚡ 
            Lights shimmer and sensors flicker as if the stars are playing hide and seek! 🌠 
            Astronauts rush to their shielded cabins while Raye giggles in delight—she never means harm, 
            just a playful reminder of the universe’s power. 🌌
          </p>
        </div>
      </div>

      {/* Dialogue Cards */}
      <div className="max-w-6xl w-full flex flex-col gap-8 mb-16">
        {dialogues.map((dialogue, idx) => (
          <div
            key={idx}
            className={`flex flex-col md:flex-row items-center bg-white/10 backdrop-blur-md rounded-2xl border border-blue-400/40 shadow-[0_0_20px_rgba(59,130,246,0.4)] overflow-hidden animate-float-${(idx % 3) + 1}`}
          >
            <div className="md:w-1/5 flex items-center justify-center p-4 bg-blue-500/10">
              <img src={dialogue.img} alt={`astro${idx+1}`} className="w-28 h-28 object-cover rounded-full border-4 border-blue-400/60" />
            </div>
            <div className="md:w-4/5 p-6">
              <p className="text-white text-lg">{dialogue.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Button */}
      <button
        onClick={() => navigate('/mars')}
        className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:scale-105 hover:shadow-[0_0_30px_rgba(56,189,248,0.7)] transition-all"
      >
        🌌 Let’s try a different path
      </button>

      {/* Floating Animations */}
      <style>
        {`
          @keyframes float1 {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          @keyframes float2 {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
          }
          @keyframes float3 {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-12px); }
          }

          .animate-float-1 { animation: float1 6s ease-in-out infinite; }
          .animate-float-2 { animation: float2 5s ease-in-out infinite; }
          .animate-float-3 { animation: float3 7s ease-in-out infinite; }
        `}
      </style>
    </div>
  );
};

export default AstraSpace;
