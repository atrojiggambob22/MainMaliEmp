// components/animations/SlideIn.js
import { motion } from 'framer-motion';

const SlideIn = ({ children, direction = 'left', delay = 0, duration = 0.6 }) => {
  const variants = {
    left: { x: -100, opacity: 0 },
    right: { x: 100, opacity: 0 },
    top: { y: -100, opacity: 0 },
    bottom: { y: 100, opacity: 0 },
  };

  const animateTo = { x: 0, y: 0, opacity: 1 };

  return (
    <motion.div
      initial={variants[direction]}
      animate={animateTo}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  );
};

export default SlideIn;
