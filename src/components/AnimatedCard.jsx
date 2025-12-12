import React from "react";
import { motion } from "framer-motion";

const AnimatedCard = ({ title, subtitle, image }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative rounded-xl overflow-hidden cursor-pointer group shadow-xl hover:shadow-2xl"
    >
      {/* The image (this was missing earlier!) */}
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover rounded-xl group-hover:scale-110 transition-transform duration-500"
      />

      {/* Animation Overlay */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Title */}
      <div className="absolute bottom-0 w-full bg-black/40 text-white py-3 text-center">
        <h3 className="font-display text-xl">{title}</h3>
        {subtitle && <p className="text-sm">{subtitle}</p>}
      </div>
    </motion.div>
  );
};

export default AnimatedCard;
