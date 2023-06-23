import { useMain } from './boards/main';
import { useSpawnedGhosts } from './gameState/spawnedGhosts';

export const useRootStore = () => ({
  mainBoard: useMain(),
  spawnedGhosts: useSpawnedGhosts(),
});
