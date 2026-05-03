import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiHeart } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="py-12 bg-gray-950 border-t border-primary/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold text-gradient mb-2">Syed Haider Ali Shah</h3>
            <p className="text-gray-400">Creative Frontend Developer</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex gap-4"
          >
            {[FiGithub, FiLinkedin, FiTwitter].map((Icon, index) => (
              <motion.a
                key={index}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                href="#"
                className="w-10 h-10 glass rounded-full flex items-center justify-center text-gray-400 hover:text-accent border border-primary/20 hover:border-accent/50 transition-colors"
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 pt-8 border-t border-gray-800 text-center"
        >
          <p className="text-gray-400 flex items-center justify-center gap-2">
            © 2026 Syed Haider Ali Shah. All rights reserved.
            <FiHeart className="text-red-500 animate-pulse" />
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
