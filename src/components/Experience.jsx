import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Experience = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const experiences = [
    {
      title: 'Frontend Developer Intern',
      company: 'Tech Solutions Inc.',
      date: '2024 - Present',
      description: 'Developing modern web applications using React, Tailwind CSS, and Framer Motion. Implementing responsive designs and interactive UI components.',
      icon: '💼',
    },
    {
      title: 'Junior Web Developer',
      company: 'Digital Creations',
      date: '2023 - 2024',
      description: 'Built and maintained client websites with HTML, CSS, JavaScript, and React. Collaborated with design team to implement pixel-perfect UIs.',
      icon: '🚀',
    },
    {
      title: 'Bachelor of Computer Science',
      company: 'University of Technology',
      date: '2020 - 2024',
      description: 'Specialized in Web Technologies and UI/UX Design. Graduated with honors. Completed projects in React, Node.js, and modern web frameworks.',
      icon: '🎓',
    },
  ];

  return (
    <section id="experience" className="py-20 md:py-32 bg-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5" />
      
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Experience & <span className="text-gradient">Education</span>
        </motion.h2>

        <VerticalTimeline lineColor="rgba(99, 102, 241, 0.3)">
          {experiences.map((exp, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element"
              contentStyle={{
                background: 'rgba(17, 24, 39, 0.8)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(99, 102, 241, 0.2)',
                borderRadius: '1rem',
                boxShadow: '0 0 20px rgba(99, 102, 241, 0.1)',
              }}
              contentArrowStyle={{ borderRight: '7px solid rgba(99, 102, 241, 0.2)' }}
              iconStyle={{
                background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                color: '#fff',
                boxShadow: '0 0 10px rgba(99, 102, 241, 0.5)',
              }}
              icon={<span className="text-2xl">{exp.icon}</span>}
              visible={inView}
            >
              <motion.div
                initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                <h4 className="text-accent font-semibold">{exp.company}</h4>
                <p className="text-gray-400 text-sm mb-3">{exp.date}</p>
                <p className="text-gray-300">{exp.description}</p>
              </motion.div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </motion.div>
    </section>
  );
};

export default Experience;
