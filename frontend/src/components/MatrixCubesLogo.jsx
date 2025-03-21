import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./MatrixCubesLogo.css"; // Import the CSS file

const Cube = ({ size, xOffset, delay }) => {
    return (
      <motion.div
        initial={{ opacity: 1, y: -120, x: xOffset, scale: 1 }}
        animate={{
          opacity: [1, 1, 0], // Keeps full opacity, then fades
          y: 276, // Move animation slightly up
          x: xOffset + (Math.random() * 140 - 70), // Shift further right
          scale: 0.8,
        }}
        transition={{
          duration: 5, // Slower falling
          ease: "easeOut",
          delay,
          opacity: { duration: 2.5, ease: "linear" }, // Fade happens over the last 2.5s
        }}
        className="cube"
        style={{ width: size, height: size }}
      />
    );
  };
  
  const MatrixCubesLogo = () => {
    const [cubes, setCubes] = useState([]);
  
    useEffect(() => {
      const generateCubes = () => {
        setCubes((prevCubes) => [
          ...prevCubes.filter((cube) => cube.id > Date.now() - 5000), // Keep only recent cubes
          ...Array(4).fill(null).map(() => ({ // Generate more cubes per interval
            id: Date.now() + Math.random(),
            size: `${Math.random() * 14 + 8}px`,
            xOffset: Math.random() * 340 - 110, // Further reduced from left
            delay: Math.random() * 1.5, // Staggered delays
          }))
        ]);
      };
  
      const interval = setInterval(generateCubes, 120); // Increase cube generation rate
      return () => clearInterval(interval);
    }, []);
  
    
  };
  
  export default MatrixCubesLogo;
  
 
