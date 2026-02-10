import { motion } from "motion/react";
import { Star, Monitor, Gamepad2 } from "lucide-react";
import { Game } from "../data/games";

interface GameCardProps {
  game: Game;
  index: number;
  onClick: (game: Game) => void;
}

const platformIcons = {
  pc: Monitor,
  playstation: Gamepad2,
  xbox: Gamepad2,
  switch: Gamepad2,
};

export function GameCard({ game, index, onClick }: GameCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{ scale: 1.03 }}
      onClick={() => onClick(game)}
      className="group cursor-pointer relative overflow-hidden rounded-lg bg-zinc-900/50 border border-zinc-800/50 backdrop-blur-sm transition-all duration-300 hover:border-zinc-700 hover:shadow-2xl hover:shadow-purple-900/20"
    >
      {/* Cover Image */}
      <div className="relative aspect-[16/9] overflow-hidden">
        <motion.img
          src={game.coverImage}
          alt={game.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
        
        {/* Glow Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-purple-600/0 via-purple-600/0 to-purple-600/0 group-hover:from-purple-600/20 group-hover:via-purple-600/10"
          initial={false}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Title */}
        <h3 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors duration-300">
          {game.title}
        </h3>

        {/* Genre */}
        <p className="text-sm text-zinc-400">{game.genre}</p>

        {/* Bottom Section */}
        <div className="flex items-center justify-between pt-2">
          {/* Rating */}
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
            <span className="text-white">{game.rating}</span>
          </div>

          {/* Platforms */}
          <div className="flex items-center gap-2">
            {game.platforms.slice(0, 3).map((platform, i) => {
              const Icon = platformIcons[platform];
              return (
                <div
                  key={i}
                  className="p-1.5 rounded bg-zinc-800/50 text-zinc-400 group-hover:text-purple-400 group-hover:bg-zinc-800 transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Hover Indicator */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}
