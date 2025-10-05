import { motion } from 'framer-motion';
import { Heart, Github, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-gray-900/50 border-t border-purple-500/20 py-8 mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-2 text-gray-300"
          >
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-400 fill-red-400 animate-pulse" />
            <span>for curious minds exploring space</span>
          </motion.div>

          <div className="flex gap-6">
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              <Github className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="mailto:contact@spaceweather.com"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              <Mail className="w-6 h-6" />
            </motion.a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mt-6 text-gray-500 text-sm"
        >
          <p>Space Weather Storytelling © 2025 | Educational Content for All Ages</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
