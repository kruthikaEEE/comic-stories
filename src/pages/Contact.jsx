import { motion } from 'framer-motion';
import { Mail, MessageCircle, Send, Github, Heart } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="inline-block mb-6"
          >
            <MessageCircle className="w-20 h-20 text-purple-400" />
          </motion.div>

          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Get In Touch
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Have questions, feedback, or story ideas? We would love to hear from you!
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <motion.a
            href="mailto:contact@spaceweather.com"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 text-center group hover:border-purple-400/50 transition-all"
          >
            <Mail className="w-16 h-16 text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-bold text-white mb-2">Email Us</h3>
            <p className="text-gray-300 mb-4">
              Send us your questions or feedback
            </p>
            <span className="text-purple-400 font-medium">
              contact@spaceweather.com
            </span>
          </motion.a>

          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.05, rotate: -2 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 text-center group hover:border-purple-400/50 transition-all"
          >
            <Github className="w-16 h-16 text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-bold text-white mb-2">Contribute</h3>
            <p className="text-gray-300 mb-4">
              Help us improve the project
            </p>
            <span className="text-purple-400 font-medium">
              View on GitHub
            </span>
          </motion.a>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-purple-500/20 rounded-3xl p-8 md:p-12"
        >
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Send Us a Message</h2>

          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-300 font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="w-full px-4 py-3 bg-gray-800/50 border border-purple-500/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-400/50 focus:ring-2 focus:ring-purple-400/20 transition-all"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-300 font-medium mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-gray-800/50 border border-purple-500/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-400/50 focus:ring-2 focus:ring-purple-400/20 transition-all"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-300 font-medium mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                rows="6"
                placeholder="Tell us what you think or ask us anything!"
                className="w-full px-4 py-3 bg-gray-800/50 border border-purple-500/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-400/50 focus:ring-2 focus:ring-purple-400/20 transition-all resize-none"
              ></textarea>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-xl font-semibold text-white transition-all"
            >
              <Send className="w-5 h-5" />
              Send Message
            </motion.button>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 text-gray-400">
            <Heart className="w-5 h-5 text-red-400 fill-red-400" />
            <span>Thank you for being part of our space exploration community!</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
