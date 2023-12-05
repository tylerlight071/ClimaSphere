"use client"

import { motion } from 'framer-motion';

const Bounce = ({ children }) => {
  return (
    <motion.div
      initial={{ scale: 0.8, y: -20 }}
      animate={{ scale: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
    >
      {children}
    </motion.div>
  );
};

export default Bounce;
