import React from 'react';
import { useNavigate } from 'react-router-dom';
import orbitImg1 from '../assets/Raye.webp';
import satImg from '../assets/Msat.webp';   // Satellite image
import rayeImg from '../assets/Raye.webp';  // Raye image

const Orbit = () => {
  const navigate = useNavigate();

  const dialogues = [
    { speaker: 'Satellite', text: "Whoa! Raye, careful! You’re bouncing around me like a cosmic ping-pong ball!", img: satImg },
    { speaker: 'Raye', text: "Hehe, I can’t help it! Orbiting Mars is so bouncy and fun!", img: rayeImg },
    { speaker: 'Satellite', text: "If you bump me one more time, I’m reporting you to Mission Control!", img: satImg },
    { speaker: 'Raye', text: "Yay! But then you’ll have to admit I’m the fastest explorer in the galaxy!", img: rayeImg },
  ];

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden pt-32 px-4">
      {/* Starry Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-indigo-900 to-gray-900">
        <div className="absolute inset-0 bg-[radial-gradient(white,transparent_2px)] bg-[length:4px_4px] opacity-30 animate-twinkle"></div>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 w-full">
        {/* Top Containers */}
        <div className="flex w-full h-[50vh] mb-4">
          <div className="w-1/2 flex items-center justify-center">
            <img src={orbitImg1} alt="Mars Orbit 1" className="w-full h-full object-cover rounded-3xl shadow-lg" />
          </div>
          <div className="w-1/2 flex items-center justify-center p-6">
            <p className="text-white text-lg bg-white/10 p-6 rounded-3xl shadow-lg">
              Raye zooms around Mars and sometimes bumps into satellites as it moves.
              These little nudges can slightly change the satellites’ paths in orbit.
              Satellites use their thrusters to adjust and stay on course.
              By observing Raye’s playful movements, scientists learn how objects interact in Mars’ orbit. 🌌🛰️
            </p>
          </div>
        </div>

        <div className="flex w-full h-[50vh] mb-6">
          <div className="w-1/2 flex items-center justify-center">
            <img src={satImg} alt="Mars Orbit 2" className="w-full h-full object-cover rounded-3xl shadow-lg" />
          </div>
          <div className="w-1/2 flex items-center justify-center p-6">
            <p className="text-white text-lg bg-white/10 p-6 rounded-3xl shadow-lg">
              Zooming around Mars is so much fun! I bounce past satellites and watch them twirl in space.
              Every nudge I give shows scientists how objects move up here. Whee! I’m exploring and helping at the same time! 🪐
            </p>
          </div>
        </div>

        {/* Dialogue Cards */}
        <div className="w-full max-w-5xl space-y-6 mb-8">
          {dialogues.map((dialogue, idx) => (
            <div key={idx} className="flex bg-white/20 rounded-2xl shadow-lg overflow-hidden">
              <div className="w-1/4 flex items-center justify-center p-4 bg-white/10">
                <img src={dialogue.img} alt={`${dialogue.speaker} ${idx + 1}`} className="w-full h-auto rounded-full" />
              </div>
              <div className="w-3/4 p-4 flex items-center">
                <p className="text-white text-lg">{dialogue.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Button */}
        <div className="flex justify-center">
          <button
            onClick={() => navigate('/mars')}
            className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:scale-105 transition-transform"
          >
            🔄 Let's try different path
          </button>
        </div>
      </div>

      {/* Animation for Stars */}
      <style>
        {`
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

export default Orbit;
