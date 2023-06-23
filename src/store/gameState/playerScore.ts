import { create } from 'zustand';

interface PlayerScore {
  highScore: number;
  setHighScore: (highScore: number) => void;
  playerScore: number;
  setPlayerScore: (playerScore: number) => void;
}

export const usePlayerScore = create<PlayerScore>((set) => ({
  highScore: 0,
  setHighScore: (highScore: number) => set({ highScore }),
  playerScore: 0,
  setPlayerScore: (playerScore: number) => set({ playerScore }),
}));
