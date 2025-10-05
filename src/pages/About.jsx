import { motion } from 'framer-motion';
import { Telescope, Sparkles, Sun, Earth, Atom } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Sun,
      title: 'Solar Events',
      description: 'Learn about CMEs, solar flares, and solar wind that travel from our Sun!'
    },
    {
      icon: Earth,
      title: 'Earth Protection',
      description: 'Discover how Earth\'s magnetic field shields us from space radiation!'
    },
    {
      icon: Atom,
      title: 'Cosmic Rays',
      description: 'Explore mysterious particles from distant exploding stars!'
    },
    {
      icon: Sparkles,
      title: 'Auroras',
      description: 'Understand the science behind the beautiful northern and southern lights!'
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="inline-block mb-6"
          >
            <Telescope className="w-20 h-20 text-purple-400" />
          </motion.div>

          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Space Weather Stories
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Space Weather Stories is an interactive educational experience that brings the wonders
            of space weather to life through engaging narratives and beautiful visualizations.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-purple-500/20 rounded-3xl p-8 md:p-12 mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            We believe that learning about space should be magical, interactive, and fun! Through
            the eyes of cosmic characters like Cammie the CME and Raye the Cosmic Ray, we help
            children and curious minds of all ages understand the invisible forces that connect
            our Sun to Earth and beyond.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            Each story is designed to be scientifically accurate while remaining accessible and
            entertaining. Your choices shape the adventure, making every journey through space
            unique!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6"
              >
                <Icon className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-purple-300 mb-4">
            Educational & Fun
          </h3>
          <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Perfect for classrooms, homeschooling, or just curious explorers! Each story includes
            real science concepts presented in a way that sparks imagination and encourages
            further learning about our amazing universe.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
