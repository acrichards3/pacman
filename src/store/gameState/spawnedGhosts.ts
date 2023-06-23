import { create } from 'zustand';

interface SpawnedGhosts {
  spawnedGhosts: number;
  increaseSpawnedGhosts: () => void;
  resetSpawnedGhosts: () => void;
}

export const useSpawnedGhosts = create<SpawnedGhosts>((set) => ({
  spawnedGhosts: 0,
  increaseSpawnedGhosts: () =>
    set((state) => ({ spawnedGhosts: state.spawnedGhosts + 1 })),
  resetSpawnedGhosts: () => set({ spawnedGhosts: 0 }),
}));
