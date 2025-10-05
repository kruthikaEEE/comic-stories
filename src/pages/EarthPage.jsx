import React from 'react';
import { useNavigate } from 'react-router-dom';
import rayeVideo from '../assets/RayeEarth.mp4';
import icon1 from '../assets/earth.jpeg';
import icon2 from '../assets/astranaut.webp';
import icon3 from '../assets/sat.webp';

const EarthPage = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start py-12 px-4 bg-gradient-to-b from-[#0a0a2a] via-[#1a1a40] to-[#000000] overflow-hidden mt-20 text-white">

      {/* Twinkling stars effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full bg-[radial-gradient(white,transparent_1px)] bg-[size:3px_3px] opacity-40 animate-twinkle"></div>
      </div>

      {/* Top section: Video + Paragraph */}
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 items-center z-10">
        
        {/* Video Section */}
        <div className="bg-white/10 border-4 border-cyan-400 rounded-3xl p-0 flex items-center justify-center animate-float-slow overflow-hidden h-96 shadow-[0_0_30px_#0ff]">
          <video 
            src={rayeVideo} 
            className="w-full h-full object-cover rounded-3xl" 
            autoPlay 
            loop 
            muted 
            playsInline
          />
        </div>

        {/* Paragraph Section */}
        <div className="bg-white/10 border-4 border-pink-500 rounded-3xl p-6 shadow-[0_0_25px_#f0f]">
          <p className="text-white text-lg leading-relaxed">
            “Whoa, I finally made it — Planet Earth! 🌎✨ Look at that swirl of blue oceans and white clouds!
            I can already feel Earth’s magnetic field buzzing around me — it’s like an invisible shield protecting everyone below! 🛡️
            Those green and purple lights near the poles? That’s what happens when my cosmic cousins play with the atmosphere — they make auroras! 🌈
            Everything here is sparkling, spinning, and alive! How cool is that? 🚀💫"
          </p>
        </div>
      </div>

      {/* Floating Buttons */}
      <div className="relative w-full max-w-5xl h-80 mt-10 z-10">
        
        {/* Button 1 */}
        <button
          onClick={() => navigate('/auroras')}
          className="absolute left-[10%] top-[10%] flex items-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 
                     text-white font-bold py-3 px-6 rounded-full shadow-[0_0_20px_#f0f] w-96 justify-center 
                     animate-float-slow hover:scale-105 transition-transform"
        >
          <img src={icon1} alt="icon1" className="w-12 h-12 rounded-full" />
          Dive through the sky — let’s feel that fiery glow! 🔥🌍
        </button>

        {/* Button 2 */}
        <button
          onClick={() => navigate('/astro')}
          className="absolute right-[15%] top-[40%] flex items-center gap-3 bg-gradient-to-r from-blue-500 to-cyan-400 
                     text-white font-bold py-3 px-6 rounded-full shadow-[0_0_20px_#0ff] w-96 justify-center 
                     animate-float-medium hover:scale-105 transition-transform"
        >
          <img src={icon2} alt="icon2" className="w-12 h-12" />
          Hey astronauts! Ready for a space high-five? 🖐️🚀
        </button>

        {/* Button 3 */}
        <button
          onClick={() => navigate('/sat')}
          className="absolute left-[25%] bottom-[5%] flex items-center gap-3 bg-gradient-to-r from-indigo-500 to-purple-600 
                     text-white font-bold py-3 px-6 rounded-full shadow-[0_0_20px_#a0f] w-96 justify-center 
                     animate-float-fast hover:scale-105 transition-transform"
        >
          <img src={icon3} alt="icon3" className="w-12 h-12 rounded-full" />
          Time to play cosmic ping-pong with satellites! 🛰️😆
        </button>
      </div>

      {/* "Try different Path!" Button */}
      <div className="w-full flex justify-center mt-12 z-10">
        <button
          onClick={() => navigate('/raye')}
          className="flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-orange-500 
                     text-white font-bold py-3 px-6 rounded-full shadow-[0_0_20px_#ffb300] hover:scale-105 transition-transform"
        >
          🔄 Try different Path!
        </button>
      </div>

      {/* Floating and Star Animations */}
      <style>
        {`
          @keyframes floatSlow {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-15px) rotate(2deg); }
          }
          @keyframes floatMedium {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-25px) rotate(-3deg); }
          }
          @keyframes floatFast {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(3deg); }
          }
          @keyframes twinkle {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 0.8; }
          }
          .animate-float-slow { animation: floatSlow 6s ease-in-out infinite; }
          .animate-float-medium { animation: floatMedium 5s ease-in-out infinite; }
          .animate-float-fast { animation: floatFast 4s ease-in-out infinite; }
          .animate-twinkle { animation: twinkle 6s ease-in-out infinite; }
        `}
      </style>
    </div>
  );
};

export default EarthPage;
