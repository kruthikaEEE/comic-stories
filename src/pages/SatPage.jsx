import React from 'react';
import { useNavigate } from 'react-router-dom';
import astronautImg from '../assets/Raye.webp';
import satelliteImg from '../assets/sat.webp';

const dialogues = [
  { type: 'astronaut', text: "Hello, shiny human-sky-box! Are you awake up here?" },
  { type: 'satellite', text: "Beep boop! Always awake, little spark! What brings you to my orbit?" },
  { type: 'astronaut', text: "I just wanted to see what it’s like to zoom around Earth without bumping into clouds!" },
  { type: 'satellite', text: "Ha! Good luck with that! I’ve been dodging space debris for years. It’s like cosmic bumper cars!" },
  { type: 'astronaut', text: "Ooo, can you teach me your spinning tricks? I promise I won’t crash into Mars!" },
  { type: 'satellite', text: "Only if you promise not to tickle my solar panels. They’re very sensitive, you know!" },
  { type: 'astronaut', text: "Deal! But if I tickle them, will Earth get extra giggles?" },
  { type: 'satellite', text: "Absolutely! Laughter guaranteed… orbit-wide!" },
];

const SatPage = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden pt-24 px-4 gap-6">

      {/* Starry Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-indigo-900 to-blue-900">
        {/* Star layer */}
        <div className="absolute inset-0 bg-[radial-gradient(white,transparent_2px)] bg-[length:4px_4px] opacity-30 animate-twinkle"></div>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center gap-6 w-full">
        {dialogues.map((dialogue, index) => (
          <div
            key={index}
            className={`w-full max-w-5xl flex flex-col md:flex-row items-center rounded-2xl shadow-lg overflow-hidden border-4 ${
              dialogue.type === 'astronaut' ? 'border-pink-400 bg-white/10' : 'border-yellow-400 bg-white/10'
            } animate-float-slow`}
          >
            {/* Image (1/4th) */}
            <div className="w-full md:w-1/4 h-32 md:h-auto flex items-center justify-center overflow-hidden">
              <img
                src={dialogue.type === 'astronaut' ? astronautImg : satelliteImg}
                alt={dialogue.type}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Dialogue Text (3/4th) */}
            <div className="w-full md:w-3/4 p-4 flex items-center">
              <p className="text-white text-lg">{dialogue.text}</p>
            </div>
          </div>
        ))}

        {/* Try Different Path Button */}
        <button
          onClick={() => navigate('/earth')}
          className="mt-6 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:scale-105 transition-transform"
        >
          🔄 Try different Path
        </button>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes floatSlow {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          .animate-float-slow {
            animation: floatSlow 6s ease-in-out infinite;
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

export default SatPage;
