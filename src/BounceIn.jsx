// components/animations/BounceIn.js
import { motion } from 'framer-motion';

const BounceIn = ({ children, delay = 0, duration = 0.6 }) => {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: 'spring',
        stiffness: 500,
        damping: 20,
        delay,
        duration
      }}
    >
      {children}
    </motion.div>
  );
};

export default BounceIn;
