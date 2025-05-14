import React from 'react';
import { motion } from 'framer-motion';

const LoadingSpinner = ({ fullScreen = false }) => {
  const spinnerVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  if (fullScreen) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-80 dark:bg-dark-800 dark:bg-opacity-80 z-50">
        <motion.div
          className="w-12 h-12 border-4 border-primary-200 dark:border-primary-900 border-t-primary-500 rounded-full"
          variants={spinnerVariants}
          animate="animate"
        />
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center p-8">
      <motion.div
        className="w-10 h-10 border-4 border-primary-200 dark:border-primary-900 border-t-primary-500 rounded-full"
        variants={spinnerVariants}
        animate="animate"
      />
    </div>
  );
};

export default LoadingSpinner;