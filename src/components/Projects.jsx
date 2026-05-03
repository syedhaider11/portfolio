import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const projects = [
    {
      title: 'Watch Store Dashboard',
      description: 'A modern e-commerce admin dashboard with real-time analytics, interactive charts, and responsive design.',
      image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_632_webp/adf6ff96207843.5ea933acafd0f.png',
      tech: ['React', 'Tailwind CSS', 'Chart.js'],
      live: '#',
      github: '#',
    },
    {
      title: 'Weather App',
      description: 'Beautiful weather application with animated backgrounds that change based on weather conditions.',
      image: 'https://unblast.com/wp-content/uploads/2018/07/Watch-Website-Template-1024x542.jpg',
      tech: ['JavaScript', 'API', 'CSS3'],
      live: '#',
      github: '#',
    },
    {
      title: 'Task Management UI',
      description: 'Interactive task manager with drag-and-drop, animations, and real-time updates.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      tech: ['React', 'Framer Motion', 'Tailwind'],
      live: '#',
      github: '#',
    },
    {
      title: 'Creative Portfolio',
      description: 'A stunning portfolio website with smooth animations, particle effects, and modern glassmorphism design.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop',
      tech: ['React', 'Tailwind CSS', 'Framer Motion'],
      live: '#',
      github: '#',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 },
    },
  };

  return (
    <section id="projects" className="py-20 md:py-32 bg-gray-900 relative overflow-hidden">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <motion.h2
          variants={cardVariants}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          My <span className="text-gradient">Projects</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="glass rounded-2xl overflow-hidden border border-primary/20 group"
            >
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm glass rounded-full text-accent border border-accent/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.live}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-primary rounded-full text-white text-sm font-semibold glow"
                  >
                    <FiExternalLink /> Live Demo
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.github}
                    className="flex items-center gap-2 px-4 py-2 glass rounded-full text-white text-sm font-semibold border border-primary/30"
                  >
                    <FiGithub /> GitHub
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
