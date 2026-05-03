import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import ParticlesBackground from './ParticlesBackground';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 10 },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 200 },
    },
  };

  const name = "Syed Haider Ali Shah".split('');

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      <ParticlesBackground />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-4 max-w-5xl mx-auto"
      >
        <motion.div variants={itemVariants} className="mb-4">
          <span className="text-accent text-lg md:text-xl font-medium">Hello, I'm</span>
        </motion.div>

        <motion.h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6">
          {name.map((letter, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              className={`inline-block ${letter === ' ' ? 'w-4' : ''} text-gradient glow-text`}
            >
              {letter}
            </motion.span>
          ))}
        </motion.h1>

        <motion.div variants={itemVariants} className="mb-6">
          <h2 className="text-2xl md:text-4xl font-bold text-white">
            Creative <span className="text-gradient">Frontend Developer</span>
          </h2>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          I am a creative and detail-oriented Frontend Developer who builds visually stunning and highly interactive web experiences.
          I specialize in crafting smooth, responsive, and engaging user interfaces.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(99, 102, 241, 0.7)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-primary rounded-full text-white font-semibold text-lg glow hover:glow transition-all"
            onClick={() => document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Work
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 glass border border-primary/50 rounded-full text-white font-semibold text-lg hover:glow transition-all"
            onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
          >
            Contact Me
          </motion.button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-16"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-gray-400"
          >
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full mx-auto relative">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="w-1.5 h-1.5 bg-accent rounded-full mx-auto mt-2"
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
