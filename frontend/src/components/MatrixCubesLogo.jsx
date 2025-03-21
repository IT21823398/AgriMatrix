import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./MatrixCubesLogo.css"; // Import the CSS file

const Cube = ({ size, xOffset, delay }) => {
    return (
      <motion.div
        initial={{ opacity: 1, y: -120, x: xOffset, scale: 1 }}
        
      />
    );
  };
  
 
