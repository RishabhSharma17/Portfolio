import React from 'react';
import { motion } from 'framer-motion';

const BallCanvas = ({ icon }) => {
  return (
    <div style={{ 
      width: '100%', 
      height: '100%', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      perspective: '1000px'
    }}>
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotateY: [0, 360],
        }}
        transition={{
          y: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          },
          rotateY: {
            duration: 6,
            repeat: Infinity,
            ease: "linear"
          }
        }}
        whileHover={{ 
          scale: 1.15,
          rotateX: 15,
          transition: { duration: 0.3 }
        }}
        whileTap={{ scale: 0.95 }}
        style={{
          width: '150px',
          height: '150px',
          transformStyle: 'preserve-3d',
          cursor: 'pointer'
        }}
      >
        <motion.img 
          src={icon} 
          alt="tech icon"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            filter: 'drop-shadow(0 10px 20px rgba(0, 0, 0, 0.3))'
          }}
        />
      </motion.div>
    </div>
  );
};

export default BallCanvas;
