
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = ({ onLoadingComplete }: { onLoadingComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.floor(Math.random() * 10) + 1;
        if (newProgress >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            onLoadingComplete();
          }, 500); // Wait 500ms after reaching 100% before completing
          return 100;
        }
        return newProgress;
      });
    }, 200);
    
    return () => clearInterval(timer);
  }, [onLoadingComplete]);
  
  return (
    <motion.div 
      className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold mb-8">
          <span className="text-white">Jared</span>
          <span className="text-green-500">Mogonchi</span>
        </h1>
        
        <div className="w-64 md:w-96 bg-gray-700 rounded-full h-4 mb-4 overflow-hidden">
          <motion.div 
            className="bg-green-500 h-4"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.2 }}
          />
        </div>
        
        <p className="text-green-500 font-bold">{progress}%</p>
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;
