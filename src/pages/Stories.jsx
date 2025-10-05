import { motion } from 'framer-motion';
import StoryCard from '../components/StoryCard';
import storiesData from '../data/stories.json';
import { BookOpen } from 'lucide-react';

const Stories = () => {
  const { stories } = storiesData;

  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <BookOpen className="w-16 h-16 text-purple-400 mx-auto mb-4" />
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            All Stories
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore all our space weather adventures and discover the amazing world beyond Earth!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {stories.map((story, index) => (
            <StoryCard key={story.id} story={story} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stories;
