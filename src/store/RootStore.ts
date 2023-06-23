import { useMain } from './boards/main';
import { usePlayerScore } from './gameState/playerScore';

export const useRootStore = () => ({
  mainBoard: useMain(),
  playerScore: usePlayerScore(),
});
