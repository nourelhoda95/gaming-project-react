import { useState } from "react";
import { AnimatePresence } from "motion/react";
import { Header } from "./components/Header";
import { GameGrid } from "./components/GameGrid";
import { GameDetails } from "./components/GameDetails";
import { games } from "./data/games";
import { Game } from "./data/games";

type ViewState = 
  | { type: 'home' }
  | { type: 'details'; game: Game };

export default function App() {
  const [viewState, setViewState] = useState<ViewState>({ type: 'home' });

  const handleGameClick = (game: Game) => {
    setViewState({ type: 'details', game });
  };

  const handleBackToHome = () => {
    setViewState({ type: 'home' });
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Header - Only shown on home page */}
      {viewState.type === 'home' && <Header />}

      {/* Main Content with Page Transitions */}
      <AnimatePresence mode="wait">
        {viewState.type === 'home' ? (
          <div key="home" className="pt-24">
            <GameGrid games={games} onGameClick={handleGameClick} />
          </div>
        ) : (
          <GameDetails
            key="details"
            game={viewState.game}
            onBack={handleBackToHome}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
