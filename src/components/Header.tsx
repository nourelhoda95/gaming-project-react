import { motion } from "motion/react";
import { Gamepad2 } from "lucide-react";

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-lg border-b border-zinc-800/50"
    >
      <div className="max-w-7xl mx-auto px-8 lg:px-12 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 cursor-pointer"
          >
            <div className="p-2 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600">
              <Gamepad2 className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl text-white tracking-tight">
              NEXUS<span className="text-purple-500">GAMES</span>
            </span>
          </motion.div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#"
              className="text-zinc-400 hover:text-white transition-colors duration-300"
            >
              Store
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#"
              className="text-zinc-400 hover:text-white transition-colors duration-300"
            >
              Library
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#"
              className="text-zinc-400 hover:text-white transition-colors duration-300"
            >
              Community
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition-all duration-300"
            >
              Sign In
            </motion.button>
          </nav>
        </div>
      </div>
    </motion.header>
  );
}
