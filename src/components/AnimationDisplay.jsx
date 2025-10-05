import { motion } from 'framer-motion';
import { Sparkles, Zap, Wind, Cloud, Orbit, Radio } from 'lucide-react';

const AnimationDisplay = ({ animationType }) => {
  const animations = {
    'cme-launch': {
      icon: Cloud,
      color: 'text-orange-400',
      particles: 20,
      description: 'CME Launching from Sun'
    },
    'aurora-gentle': {
      icon: Sparkles,
      color: 'text-green-400',
      particles: 30,
      description: 'Gentle Aurora Dance'
    },
    'aurora-dance': {
      icon: Sparkles,
      color: 'text-purple-400',
      particles: 40,
      description: 'Beautiful Aurora Display'
    },
    'cme-impact': {
      icon: Zap,
      color: 'text-red-400',
      particles: 25,
      description: 'Powerful CME Impact'
    },
    'satellite-protect': {
      icon: Radio,
      color: 'text-blue-400',
      particles: 15,
      description: 'Satellite Protection Systems'
    },
    'cosmic-travel': {
      icon: Sparkles,
      color: 'text-purple-400',
      particles: 50,
      description: 'Cosmic Ray Journey'
    },
    'earth-shield': {
      icon: Orbit,
      color: 'text-blue-400',
      particles: 30,
      description: 'Earth\'s Magnetic Shield'
    },
    'mars-surface': {
      icon: Zap,
      color: 'text-red-400',
      particles: 20,
      description: 'Mars Surface Interaction'
    },
    'magnetic-field': {
      icon: Orbit,
      color: 'text-cyan-400',
      particles: 35,
      description: 'Protective Magnetic Field'
    },
    'mars-chemistry': {
      icon: Sparkles,
      color: 'text-orange-400',
      particles: 25,
      description: 'Chemical Reactions on Mars'
    },
    // ...existing code...
  };

  const animation = animations[animationType] || animations['cosmic-travel'];
  const Icon = animation.icon;

  return (
    <div className="relative w-full h-64 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-purple-500/20 mb-8">
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Icon className={`w-24 h-24 ${animation.color}`} />
        </motion.div>
      </div>

      {[...Array(animation.particles)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-1 h-1 ${animation.color} rounded-full`}
          initial={{
            x: '50%',
            y: '50%',
            opacity: 0,
          }}
          animate={{
            x: `${Math.random() * 100}%`,
            y: `${Math.random() * 100}%`,
            opacity: [0, 1, 0],
            scale: [0, Math.random() * 2 + 1, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeOut",
          }}
        />
      ))}

      <div className="absolute bottom-4 left-0 right-0 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-sm text-gray-400 font-medium"
        >
          {animation.description}
        </motion.p>
      </div>
    </div>
  );
};

export default AnimationDisplay;
