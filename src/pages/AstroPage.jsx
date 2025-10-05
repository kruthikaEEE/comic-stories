import React from 'react';
import { useNavigate } from 'react-router-dom';
import auroraTopImg from '../assets/astra2.webp'; // Top left image
import auroraCardImg from '../assets/astranaut.webp';   // Bottom card left image

const AurorasPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-purple-300 to-blue-200 pt-24 px-4">

      {/* Top Section: Two Containers */}
      <div className="flex w-full h-[50vh] gap-4 mb-8">
        {/* Left Container - Image */}
        <div className="w-1/2 h-full rounded-3xl overflow-hidden border-4 border-purple-400 flex items-center justify-center">
          <img 
            src={auroraTopImg} 
            alt="Aurora Top" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Container - Dialogue */}
        <div className="w-1/2 h-full bg-white/70 rounded-3xl border-4 border-blue-400 flex items-center justify-center p-6">
          <p className="text-gray-800 text-lg text-center">
            "Whoa! A tiny sparkling creature is zooming past me!
It’s glowing like a rainbow and giving me a little tingle — guess that’s the space rays!
Uh… maybe it wants to play… or borrow my space snacks?!
Hi there, little cosmic spark!”
          </p>
        </div>
      </div>

      {/* Bottom Card */}
      <div className="w-full max-w-6xl bg-white/70 rounded-3xl border-4 border-pink-400 flex flex-col md:flex-row overflow-hidden shadow-lg">
        {/* Left Image (1/4th) */}
        <div className="w-full md:w-1/4 h-48 md:h-auto flex items-center justify-center overflow-hidden">
          <img 
            src={auroraCardImg} 
            alt="Aurora Card" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Text + Button */}
        <div className="w-full md:w-3/4 p-6 flex flex-col justify-between">
          <p className="text-gray-800 text-lg mb-4">
            "Galactic Cosmic Rays are tiny space sparks that zoom super fast through the galaxy!
When astronauts fly far from Earth, these sparks can tickle their spacesuits and even their bodies.
They might feel a little tired or wobbly because of the space sparkles.
That’s why astronauts wear special suits and stay inside shielded spaceships — to keep the cosmic sparkles fun, not pesky!"
          </p>

          <button
            onClick={() => navigate('/earth')}
            className="self-start bg-gradient-to-r from-purple-400 to-pink-500 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:scale-105 transition-transform"
          >
            Try different path
          </button>
        </div>
      </div>

    </div>
  );
};

export default AurorasPage;
