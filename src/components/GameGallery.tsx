import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface GameGalleryProps {
  screenshots: string[];
  currentIndex: number;
  onImageClick: (index: number) => void;
  onNext: () => void;
  onPrevious: () => void;
}

export function GameGallery({
  screenshots,
  currentIndex,
  onImageClick,
  onNext,
  onPrevious,
}: GameGalleryProps) {
  return (
    <div className="space-y-4">
      {/* Main Gallery Navigation */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl text-white">Screenshots</h3>
        <div className="flex gap-2">
          <button
            onClick={onPrevious}
            className="p-2 rounded-lg bg-zinc-800/50 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-all duration-300 border border-zinc-700/50 hover:border-zinc-600"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={onNext}
            className="p-2 rounded-lg bg-zinc-800/50 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-all duration-300 border border-zinc-700/50 hover:border-zinc-600"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Thumbnails Grid */}
      <div className="grid grid-cols-2 gap-4">
        <AnimatePresence mode="wait">
          {screenshots.map((screenshot, index) => (
            <motion.div
              key={screenshot}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ 
                duration: 0.3, 
                delay: index * 0.05,
                ease: "easeOut" 
              }}
              onClick={() => onImageClick(index)}
              className={`
                relative cursor-pointer overflow-hidden rounded-lg aspect-video group
                border-2 transition-all duration-300
                ${
                  currentIndex === index
                    ? "border-purple-500 shadow-lg shadow-purple-500/30"
                    : "border-zinc-800 hover:border-zinc-600"
                }
              `}
            >
              {/* Thumbnail Image */}
              <img
                src={screenshot}
                alt={`Screenshot ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className={`
                absolute inset-0 bg-black/40 transition-opacity duration-300
                ${currentIndex === index ? "opacity-0" : "group-hover:opacity-0"}
              `} />

              {/* Active Indicator */}
              {currentIndex === index && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute inset-0 border-2 border-purple-500 rounded-lg"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}

              {/* Glow Effect on Hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-purple-600/20 via-transparent to-transparent opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Current Image Counter */}
      <div className="text-center text-sm text-zinc-500">
        {currentIndex + 1} / {screenshots.length}
      </div>
    </div>
  );
}
