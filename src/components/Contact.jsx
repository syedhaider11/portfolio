import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [focusedField, setFocusedField] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! (This is a demo)');
    setFormData({ name: '', email: '', message: '' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 },
    },
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-gray-900 relative overflow-hidden">
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
          Get In <span className="text-gradient">Touch</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div variants={itemVariants} className="space-y-8">
            <h3 className="text-2xl font-bold text-white">Let's Connect</h3>
            <p className="text-gray-300 text-lg">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            
            <div className="space-y-4">
              {[
                { icon: <FiMail className="text-accent" />, label: 'Email', value: 'syedhaidera314@gmail.com' },
                { icon: <FiPhone className="text-accent" />, label: 'Phone', value: '03296818462' },
                { icon: <FiMapPin className="text-accent" />, label: 'Location', value: 'Pakistan' },
              ].map((info) => (
                <motion.div
                  key={info.label}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 glass rounded-xl p-4 border border-primary/20"
                >
                  <div className="text-2xl">{info.icon}</div>
                  <div>
                    <p className="text-gray-400 text-sm">{info.label}</p>
                    <p className="text-white">{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex gap-4">
              {[FiGithub, FiLinkedin, FiTwitter].map((Icon, index) => (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.2, boxShadow: '0 0 20px rgba(99, 102, 241, 0.7)' }}
                  whileTap={{ scale: 0.9 }}
                  href="#"
                  className="w-12 h-12 glass rounded-full flex items-center justify-center text-white border border-primary/30 hover:border-accent"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.form
            variants={itemVariants}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {[
              { name: 'name', label: 'Your Name', type: 'text' },
              { name: 'email', label: 'Your Email', type: 'email' },
            ].map((field) => (
              <motion.div
                key={field.name}
                className="relative"
                whileHover={{ scale: 1.02 }}
              >
                <input
                  type={field.type}
                  value={formData[field.name]}
                  onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                  onFocus={() => setFocusedField(field.name)}
                  onBlur={() => setFocusedField('')}
                  required
                  className="w-full px-4 py-4 bg-gray-800/50 border border-primary/30 rounded-xl text-white focus:border-accent focus:outline-none focus:glow transition-all peer"
                  placeholder=" "
                />
                <label
                  className={`absolute left-4 transition-all pointer-events-none ${
                    focusedField === field.name || formData[field.name]
                      ? '-top-2.5 text-xs text-accent bg-gray-900 px-2'
                      : 'top-4 text-gray-400'
                  }`}
                >
                  {field.label}
                </label>
              </motion.div>
            ))}

            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
            >
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                onFocus={() => setFocusedField('message')}
                onBlur={() => setFocusedField('')}
                required
                rows={5}
                className="w-full px-4 py-4 bg-gray-800/50 border border-primary/30 rounded-xl text-white focus:border-accent focus:outline-none focus:glow transition-all resize-none peer"
                placeholder=" "
              />
              <label
                className={`absolute left-4 transition-all pointer-events-none ${
                  focusedField === 'message' || formData.message
                    ? '-top-2.5 text-xs text-accent bg-gray-900 px-2'
                    : 'top-4 text-gray-400'
                }`}
              >
                Your Message
              </label>
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(99, 102, 241, 0.7)' }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full py-4 bg-gradient-primary rounded-xl text-white font-semibold text-lg flex items-center justify-center gap-2 glow"
            >
              <FiSend /> Send Message
            </motion.button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
