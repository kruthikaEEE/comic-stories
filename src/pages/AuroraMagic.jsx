import React from "react";
import { useNavigate } from "react-router-dom"; // import useNavigate
import Aurora from '../assets/Aurora.mp4';
import CuteCommie from '../assets/cute commie.webp';

const AuroraMagic = () => {
  const navigate = useNavigate(); // initialize navigate

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-between relative py-12 px-4 font-[Comic_Sans_MS] mt-8 w-full overflow-hidden"
      style={{
        background: 'radial-gradient(circle at 30% 20%, #0b0c28 0%, #000 100%)',
      }}
    >
      {/* Floating stars */}
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
              opacity: Math.random() * 0.8 + 0.2,
              filter: 'blur(0.8px)',
              animation: `twinkle ${Math.random() * 3 + 2}s infinite alternate`,
            }}
          />
        ))}
      </div>

      {/* Aurora video card */}
      <div
        className="w-full max-w-5xl mx-auto bg-white/10 border-4 border-blue-400 rounded-3xl shadow-xl flex items-center justify-center mb-4 mt-2 z-10"
        style={{ height: '480px' }}
      >
        <video
          src={Aurora}
          className="w-full h-full object-cover rounded-3xl shadow-lg"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      {/* Cammie message card */}
      <div className="w-full flex justify-center mt-4 z-10">
        <div
          className="relative border-4 border-purple-400 rounded-3xl px-16 py-8 shadow-xl text-2xl font-bold text-purple-200 max-w-4xl w-full text-center bg-gradient-to-r from-indigo-900 via-purple-900 to-black/50 backdrop-blur-sm"
        >
          <img
            src={CuteCommie}
            alt="Cammie"
            className="absolute -top-8 right-8 w-20 h-20 object-contain drop-shadow-xl border-2 border-white rounded-full bg-white"
            style={{ zIndex: 2 }}
          />
          Hehe! You’re welcome, little Earthling! 💫 I just sneezed a sparkle sneeze—ACHOOO! 💨🌈
          That’s how the colors came! Don’t tell anyone my secret, or I’ll tickle the Moon next!
        </div>
      </div>

      {/* Button to navigate to StoriesPage */}
      <div className="w-full flex justify-center mt-8 z-10">
        <button
          onClick={() => navigate('/stories')} // update the route to your StoriesPage path
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:scale-105 transition-transform"
        >
          Let's try different path
        </button>
      </div>

      {/* Star twinkle animation */}
      <style>
        {`
          @keyframes twinkle {
            0% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.3); }
            100% { opacity: 0.3; transform: scale(1); }
          }
        `}
      </style>
    </div>
  );
};

export default AuroraMagic;
