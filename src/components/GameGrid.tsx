import { GameCard } from "./GameCard";
import { Game } from "../data/games";

interface GameGridProps {
  games: Game[];
  onGameClick: (game: Game) => void;
}

export function GameGrid({ games, onGameClick }: GameGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-8 lg:p-12">
      {games.map((game, index) => (
        <GameCard
          key={game.id}
          game={game}
          index={index}
          onClick={onGameClick}
        />
      ))}
    </div>
  );
}
