import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

const StoryCard = ({ story, index }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/story/${story.id}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      whileHover={{
        scale: 1.05,
        rotate: Math.random() * 4 - 2,
        transition: { duration: 0.3 }
      }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      role="button"
      className={`relative cursor-pointer group`}
    >
      <div className={`relative bg-gradient-to-br ${story.color} p-1 rounded-2xl overflow-hidden`}>
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="relative bg-gray-900/90 backdrop-blur-sm p-6 rounded-xl h-full">
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            className="text-6xl mb-4 inline-block"
          >
            {story.icon}
          </motion.div>

          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-pink-300 group-hover:bg-clip-text transition-all duration-300">
            {story.title}
          </h3>

          <p className="text-purple-300 text-sm font-medium mb-3">
            {story.subtitle}
          </p>

          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            {story.description}
          </p>

          <motion.div
            className="flex items-center gap-2 text-purple-400 font-medium"
            whileHover={{ x: 5 }}
          >
            <span>Start Adventure</span>
            <Sparkles className="w-4 h-4" />
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10"
      />
    </motion.div>
  );
};

export default StoryCard;
