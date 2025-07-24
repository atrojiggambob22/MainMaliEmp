// components/animations/FadeInSection.jsx
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const FadeInSection = ({ children, delay = 0, direction = "bottom" }) => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });

  // Set initial position based on direction
  const getInitial = () => {
    switch (direction) {
      case "top":
        return { opacity: 0, y: -50 };
      case "bottom":
        return { opacity: 0, y: 50 };
      case "left":
        return { opacity: 0, x: -50 };
      case "right":
        return { opacity: 0, x: 50 };
      default:
        return { opacity: 0 };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={getInitial()}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection;
