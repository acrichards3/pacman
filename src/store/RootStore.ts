import { useMain } from './boards/main';
import { usePlayerScore } from './gameState/playerScore';
import { useEntityPosition } from './gameState/entityPosition';

export const useRootStore = () => ({
  mainBoard: useMain(),
  playerScore: usePlayerScore(),
  entityPosition: useEntityPosition(),
});
