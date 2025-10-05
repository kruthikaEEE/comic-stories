import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Stories', path: '/stories' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-purple-500/20"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-8 h-8 text-yellow-400" />
            </motion.div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Space Stories
            </span>
          </Link>

          <div className="flex gap-6">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative"
              >
                <motion.span
                  className={`text-lg font-medium transition-colors ${
                    isActive(link.path)
                      ? 'text-purple-400'
                      : 'text-gray-300 hover:text-purple-300'
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.name}
                </motion.span>
                {isActive(link.path) && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400"
                  />
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
