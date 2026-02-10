import { motion } from "motion/react";
import { ArrowLeft, Play, Calendar, Users, Tag, Star } from "lucide-react";
import { Game } from "../data/games";
import { GameHero } from "./GameHero";
import { GameGallery } from "./GameGallery";
import { useState, useEffect } from "react";

interface GameDetailsProps {
  game: Game;
  onBack: () => void;
}

export function GameDetails({ game, onBack }: GameDetailsProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [heroImage, setHeroImage] = useState(game.heroImage);

  useEffect(() => {
    setHeroImage(game.screenshots[currentImageIndex]);
  }, [currentImageIndex, game.screenshots]);

  const handleImageClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => 
      prev === game.screenshots.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrevious = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? game.screenshots.length - 1 : prev - 1
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-black"
    >
      {/* Back Button */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        onClick={onBack}
        className="fixed top-8 left-8 z-50 flex items-center gap-2 px-4 py-2 rounded-lg bg-black/80 backdrop-blur-sm border border-zinc-800 text-white hover:bg-zinc-900 hover:border-zinc-700 transition-all duration-300 group"
      >
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
        <span>Back to Games</span>
      </motion.button>

      {/* Hero Section */}
      <GameHero image={heroImage} title={game.title} />

      {/* Content Section */}
      <div className="relative -mt-32 z-10">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Game Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="space-y-8"
            >
              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-5xl lg:text-6xl text-white tracking-tight"
              >
                {game.title}
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-lg text-zinc-300 leading-relaxed"
              >
                {game.description}
              </motion.p>

              {/* Metadata Grid */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="grid grid-cols-2 gap-6"
              >
                {/* Genre */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-zinc-500">
                    <Tag className="w-4 h-4" />
                    <span className="text-sm uppercase tracking-wider">Genre</span>
                  </div>
                  <p className="text-white text-lg">{game.genre}</p>
                </div>

                {/* Release Date */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-zinc-500">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm uppercase tracking-wider">Release</span>
                  </div>
                  <p className="text-white text-lg">
                    {new Date(game.releaseDate).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </p>
                </div>

                {/* Developer */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-zinc-500">
                    <Users className="w-4 h-4" />
                    <span className="text-sm uppercase tracking-wider">Developer</span>
                  </div>
                  <p className="text-white text-lg">{game.developer}</p>
                </div>

                {/* Rating */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-zinc-500">
                    <Star className="w-4 h-4" />
                    <span className="text-sm uppercase tracking-wider">Rating</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-white text-lg">{game.rating}</p>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(game.rating / 2)
                              ? "fill-yellow-500 text-yellow-500"
                              : "text-zinc-700"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Action Button */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full lg:w-auto px-12 py-4 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold flex items-center justify-center gap-3 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg shadow-purple-900/50"
              >
                <Play className="w-5 h-5 fill-white" />
                <span>Watch Trailer</span>
              </motion.button>
            </motion.div>

            {/* Right Column - Gallery */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <GameGallery
                screenshots={game.screenshots}
                currentIndex={currentImageIndex}
                onImageClick={handleImageClick}
                onNext={handleNext}
                onPrevious={handlePrevious}
              />
            </motion.div>
          </div>

          {/* Bottom Spacing */}
          <div className="h-24" />
        </div>
      </div>
    </motion.div>
  );
}
