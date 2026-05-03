import { motion } from 'framer-motion';
import { useScrollPosition } from '../hooks/useScrollPosition';

const ScrollProgress = () => {
  const scroll = useScrollPosition();
  
  const getScrollPercent = () => {
    const scrollTop = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    return (scrollTop / docHeight) * 100;
  };

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-primary z-50 origin-left"
      style={{ scaleX: getScrollPercent() / 100 }}
      transition={{ duration: 0.1 }}
    />
  );
};

export default ScrollProgress;
