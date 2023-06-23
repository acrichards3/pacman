import { create } from 'zustand';

interface EntityPosition {
  player: [number, number];
  redGhost: [number, number];
  pinkGhost: [number, number];
  blueGhost: [number, number];
  orangeGhost: [number, number];
  setPlayer: (player: [number, number]) => void;
  setRedGhost: (redGhost: [number, number]) => void;
  setPinkGhost: (pinkGhost: [number, number]) => void;
  setBlueGhost: (blueGhost: [number, number]) => void;
  setOrangeGhost: (orangeGhost: [number, number]) => void;
}

export const useEntityPosition = create<EntityPosition>((set) => ({
  player: [16, 22],
  redGhost: [15, 17],
  pinkGhost: [17, 17],
  blueGhost: [15, 18],
  orangeGhost: [17, 18],
  setPlayer: (player) => set({ player }),
  setRedGhost: (redGhost) => set({ redGhost }),
  setPinkGhost: (pinkGhost) => set({ pinkGhost }),
  setBlueGhost: (blueGhost) => set({ blueGhost }),
  setOrangeGhost: (orangeGhost) => set({ orangeGhost }),
}));
