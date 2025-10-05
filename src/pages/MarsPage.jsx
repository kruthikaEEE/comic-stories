import React from 'react';
import { useNavigate } from 'react-router-dom';
import marsImage from '../assets/mars.jpeg';
import icon1 from '../assets/mars.jpeg';
import icon2 from '../assets/M1.png';
import icon3 from '../assets/As1.jpeg';

const MarsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-b from-black via-red-900 to-orange-800 pt-32 px-4 relative overflow-hidden">

      {/* Optional twinkling stars background */}
      <div className="absolute inset-0 z-0">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>

      {/* Top section: Image + Paragraph */}
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 items-center z-10">
        
        {/* Image Section */}
        <div className="bg-white/10 border-4 border-red-400 rounded-3xl p-0 flex items-center justify-center animate-float-slow overflow-hidden h-96">
          <img 
            src={marsImage}  
            alt="Mars" 
            className="w-full h-full object-cover rounded-3xl" 
          />
        </div>

        {/* Paragraph */}
        <div className="bg-white/10 border-4 border-orange-400 rounded-3xl p-6 backdrop-blur-sm">
          <p className="text-white text-lg leading-relaxed">
            “Wow, Mars! 🔴 The red deserts and dusty mountains are incredible! 
            I can feel its thin atmosphere brushing past me — a lot thinner than Earth's, so I have to be careful! 🛡️
            Those rusty red skies are beautiful, and the sunsets look totally alien. 🌅
            Let’s explore this mysterious planet and see what secrets it holds! 🚀💫"
          </p>
        </div>
      </div>

      {/* Floating Buttons */}
      <div className="relative w-full max-w-5xl h-80 mt-10 z-10">
        <button
          onClick={() => navigate('/astramars')}
          className="absolute left-[10%] top-[10%] flex items-center gap-3 
                     bg-gradient-to-r from-indigo-900 via-purple-800 to-blue-900 
                     text-white font-bold py-3 px-6 rounded-full shadow-lg w-96 justify-center 
                     animate-float-slow border border-blue-400/40 hover:shadow-blue-400/60 transition-shadow"
        >
          <img src={icon1} alt="icon1" className="w-12 h-12 rounded-full" />
          Visit astronauts on Mars🚀
        </button>

        <button
          onClick={() => navigate('/marssurf')}
          className="absolute right-[15%] top-[40%] flex items-center gap-3 
                     bg-gradient-to-r from-indigo-800 via-purple-900 to-black 
                     text-white font-bold py-3 px-6 rounded-full shadow-lg w-96 justify-center 
                     animate-float-medium border border-purple-500/40 hover:shadow-purple-400/60 transition-shadow"
        >
          <img src={icon2} alt="icon2" className="w-12 h-12 rounded-full" />
          Enter Martian surface
        </button>

        <button
          onClick={() => navigate('/orbit')}
          className="absolute left-[25%] bottom-[5%] flex items-center gap-3 
                     bg-gradient-to-r from-blue-900 via-black to-indigo-800 
                     text-white font-bold py-3 px-6 rounded-full shadow-lg w-96 justify-center 
                     animate-float-fast border border-indigo-400/40 hover:shadow-indigo-400/60 transition-shadow"
        >
          <img src={icon3} alt="icon3" className="w-12 h-12 rounded-full" />
          Stay in orbit around Mars
        </button>
      </div>

      {/* Floating Animations & Stars */}
      <style>
        {`
          /* Floating animations */
          @keyframes floatSlow {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-15px) rotate(2deg); }
          }
          @keyframes floatMedium {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-25px) rotate(-3deg); }
          }
          @keyframes floatFast {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(3deg); }
          }
          .animate-float-slow {
            animation: floatSlow 6s ease-in-out infinite;
          }
          .animate-float-medium {
            animation: floatMedium 5s ease-in-out infinite;
          }
          .animate-float-fast {
            animation: floatFast 4s ease-in-out infinite;
          }

          /* Starry background */
          .stars, .stars2, .stars3 {
            position: absolute;
            width: 100%;
            height: 100%;
            background-repeat: repeat;
            background-size: contain;
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

export default MarsPage;
