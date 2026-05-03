import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [animatedSkills, setAnimatedSkills] = useState([]);

  const skills = [
    { name: 'HTML', level: 95, color: '#E34F26', icon: '🔥' },
    { name: 'CSS', level: 90, color: '#1572B6', icon: '🎨' },
    { name: 'Tailwind CSS', level: 88, color: '#06B6D4', icon: '💨' },
    { name: 'JavaScript', level: 85, color: '#F7DF1E', icon: '⚡' },
    { name: 'React', level: 82, color: '#61DAFB', icon: '⚛️' },
  ];

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setAnimatedSkills(skills.map(s => ({ ...s, animatedLevel: s.level })));
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 },
    },
  };

  return (
    <section id="skills" className="py-20 md:py-32 bg-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-l from-primary/5 to-accent/5" />
      
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          My <span className="text-gradient">Skills</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="glass rounded-2xl p-6 border border-primary/20"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{skill.icon}</span>
                  <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                </div>
                <span className="text-accent font-bold">{skill.level}%</span>
              </div>
              <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ duration: 1.5, delay: index * 0.2, ease: 'easeOut' }}
                  className="h-full rounded-full"
                  style={{ background: `linear-gradient(90deg, ${skill.color}, ${skill.color}88)` }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={itemVariants}
          className="mt-16 text-center"
        >
          <div className="flex flex-wrap justify-center gap-4">
            {['Responsive Design', 'Animations', 'UI/UX', 'Performance', 'SEO'].map((tag) => (
              <motion.span
                key={tag}
                whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(99, 102, 241, 0.5)' }}
                className="px-6 py-2 glass rounded-full text-gray-300 border border-primary/30 cursor-default"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
