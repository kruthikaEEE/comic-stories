import React from "react";
import { Link } from 'react-router-dom';
import sadSat from '../assets/sadSat.png';
import women from '../assets/women.png';
import astranaut from '../assets/astranaut.png';
import cuteBoy from '../assets/cuteBoy.png';

const dialogues = [
  { img: sadSat, text: "Oh nooo! Somebody stop that fiery zoom-ball! 🛰️💫 My circuits are doing the cha-cha dance! 💃 I’m not built for roller coasters, Cammie! Next time, use your brakes before you shake me into space spaghetti! 😵‍💫" },
  { img: cuteBoy, text: "Hey Cammie, next time warn me before you unplug the planet! 😅 At least the stars came to say hi!" },
  { img: women, text: "Hellooo? Can anybody hear me? …Oh right, Cammie turned Earth into airplane mode! 📵" },
  { img: astranaut, text: "Whoa! Radiation levels rising—Cammie, are you trying to give us a tan through the spacesuit?!" },
];

const ZoomFullThrottlePage = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-start py-12 px-4 font-[Comic_Sans_MS] relative overflow-hidden"
      style={{ background: 'radial-gradient(circle at 20% 20%, #0a0b2a 0%, #000 100%)' }}
    >
      {/* Decorative stars */}
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
              opacity: Math.random() * 0.7 + 0.3,
              filter: 'blur(0.5px)',
            }}
          />
        ))}
      </div>

      <div className="w-full max-w-3xl mx-auto flex flex-col gap-8 mt-8 z-10">
        {dialogues.map((item, idx) => (
          <div key={idx} className={`flex flex-row items-center gap-8 ${idx % 2 === 1 ? 'flex-row-reverse' : ''}`}>
            <img
              src={item.img}
              alt={`Image ${idx + 1}`}
              className="w-32 h-32 object-cover rounded-2xl border-4 border-blue-300 shadow-lg bg-white"
            />
            <div className="bg-white/20 border-4 border-yellow-400 rounded-3xl px-8 py-4 shadow-xl text-2xl font-bold text-yellow-300 w-full text-left" style={{ fontFamily: 'Comic Sans MS, Comic Sans, cursive' }}>
              {item.text}
            </div>
          </div>
        ))}

        <div className="mt-8 flex justify-center">
          <Link to="/story/cammie-cme/aurora2" aria-label="See how Cammie turns trouble into beauty">
            <button className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-extrabold px-6 py-3 rounded-full shadow-2xl transform hover:-translate-y-0.5 active:translate-y-0 transition-all">
              <span className="text-2xl">🌍</span>
              <span className="text-lg">See how Cammie turns trouble into beauty!</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ZoomFullThrottlePage;
