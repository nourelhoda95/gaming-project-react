import { motion } from "motion/react";
import { useState, useEffect } from "react";

interface GameHeroProps {
  image: string;
  title: string;
}

export function GameHero({ image, title }: GameHeroProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    setImageLoaded(false);
    const img = new Image();
    img.src = image;
    img.onload = () => setImageLoaded(true);
  }, [image]);

  return (
    <div className="relative w-full h-[60vh] lg:h-[70vh] overflow-hidden">
      {/* Hero Image with Parallax Effect */}
      <motion.div
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ 
          scale: imageLoaded ? 1 : 1.2, 
          opacity: imageLoaded ? 1 : 0 
        }}
        transition={{ 
          duration: 1.2, 
          ease: [0.25, 0.46, 0.45, 0.94] 
        }}
        className="absolute inset-0"
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80" />

      {/* Animated Glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-purple-900/30 via-transparent to-transparent"
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </div>
  );
}
