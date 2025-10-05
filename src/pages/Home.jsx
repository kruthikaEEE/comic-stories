import { motion } from 'framer-motion';
import StoryCard from '../components/StoryCard';
import storiesData from '../data/stories.json';
import { Rocket, Sparkles } from 'lucide-react';

const Home = () => {
  const { stories } = storiesData;
  const filteredStories = stories.filter(story => story.id !== 'sol-solar-wind');

  return (
    <div className="relative min-h-screen pt-24 pb-12 px-4 overflow-hidden bg-gradient-to-b from-[#030014] via-[#0a043c] to-[#000000] text-white">
      
      {/* ✨ Twinkling Star Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full bg-[radial-gradient(white,transparent_1px)] bg-[size:3px_3px] opacity-30 animate-twinkle"></div>
      </div>

      <div className="container mx-auto relative z-10">
        
        {/* 🚀 Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          {/* Floating Rocket */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="inline-block mb-6"
          >
            <Rocket className="w-20 h-20 text-cyan-400 drop-shadow-[0_0_20px_#0ff]" />
          </motion.div>

          {/* Title */}
          <h1 className="text-6xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_#c084fc]">
            Space Weather Stories
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Welcome to the magical world of space weather! 🌠  
            Join our cosmic friends on adventures through the Sun, space, and beyond —  
            creating auroras, protecting planets, and discovering the mysteries of the cosmos!
          </motion.p>

          {/* Sparkle Divider */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center justify-center gap-2 mt-6 text-yellow-400"
          >
            <Sparkles className="w-5 h-5" />
            <span className="text-lg font-medium tracking-wide">✨ Choose your adventure below! ✨</span>
            <Sparkles className="w-5 h-5" />
          </motion.div>
        </motion.div>

        {/* 🌌 Story Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex justify-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-3xl">
            {filteredStories.map((story, index) => (
              <StoryCard key={story.id} story={story} index={index} />
            ))}
          </div>
        </motion.div>

        {/* 🌍 Info Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-center mt-20"
        >
          <div className="inline-block bg-gradient-to-r from-indigo-900/40 via-purple-900/40 to-pink-900/40 backdrop-blur-md border border-purple-500/40 rounded-3xl p-10 max-w-2xl shadow-[0_0_40px_#7e22ce66]">
            <h3 className="text-3xl font-bold text-purple-300 mb-4 drop-shadow-[0_0_10px_#a855f7]">
              What is Space Weather?
            </h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              Space weather is the dance of charged particles, magnetic fields, and cosmic rays between the Sun and Earth. ☀️🌎  
              Just like Earth’s rain and wind, space has storms too — they paint auroras, power satellites, and teach us about our place in the galaxy.  
              Each story lets you see the universe through the eyes of our cosmic heroes! ✨
            </p>
          </div>
        </motion.div>
      </div>

      {/* 🌠 Background Animations */}
      <style>
        {`
          @keyframes twinkle {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 0.8; }
          }
          .animate-twinkle {
            animation: twinkle 6s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  );
};

export default Home;
