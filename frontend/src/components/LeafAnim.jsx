import React from "react";
import { motion } from "framer-motion";
import leaf from "../assets/leaf.png";
import "../styles/MatrixCubesLogo.css";

const LeafAnim = () => {
    return (
        <motion.div
            className="glowing-leaf-container"
            animate={{
                filter: [
                    "drop-shadow(0px 0px 10px #7ED95750)",
                    "drop-shadow(0px 0px 25px #7ED95780)",
                    "drop-shadow(0px 0px 10px #7ED95750)"
                ]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
            <img
                src={leaf}
                alt="Glowing Leaf Logo"
                className="glowing-leaf-image"
            />
        </motion.div>
    );
};

export default LeafAnim;