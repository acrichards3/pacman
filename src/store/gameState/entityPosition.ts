import { create } from 'zustand';
import type { BoardConfig } from '~/types/BoardConfig';

interface Board {
  board: BoardConfig[][];
  setBoard: (board: BoardConfig[][]) => void;
}

// Z = Red Ghost spawn
// X = Pink Ghost spawn
// C = Blue Ghost spawn
// V = Orange Ghost spawn
// E = Ghost exit
// S = Pacman spawn
// P = Portal
// B = Border
// . = Empty
// W = Wall
// o = Pellet
// O = Power Pellet

export const useEntityPosition = create<Board>((set) => ({
  board: [
    ['B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', '.', 'B', 'P', 'B', '.', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B',], // prettier-ignore
    ['B', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'B', '.', 'B', '.', 'B', '.', 'B', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'B',], // prettier-ignore
    ['B', '.', 'W', 'W', '.', 'W', 'W', '.', 'W', 'W', 'W', 'W', '.', 'B', '.', 'B', '.', 'B', '.', 'B', '.', 'W', 'W', 'W', 'W', '.', 'W', 'W', '.', 'W', 'W', '.', 'B',], // prettier-ignore
    ['B', '.', 'W', 'W', '.', 'W', 'W', '.', 'W', '.', '.', 'W', '.', 'B', 'B', 'B', '.', 'B', 'B', 'B', '.', 'W', '.', '.', 'W', '.', 'W', 'W', '.', 'W', 'W', '.', 'B',], // prettier-ignore
    ['B', '.', '.', '.', '.', '.', '.', '.', 'W', 'W', 'W', 'W', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'W', 'W', 'W', 'W', '.', '.', '.', '.', '.', '.', '.', 'B',], // prettier-ignore
    ['B', '.', 'W', 'W', '.', 'W', 'W', '.', '.', '.', '.', '.', '.', 'W', 'W', 'W', 'W', 'W', 'W', 'W', '.', '.', '.', '.', '.', '.', 'W', 'W', '.', 'W', 'W', '.', 'B',], // prettier-ignore
    ['B', '.', 'W', 'W', '.', 'W', 'W', '.', 'W', 'W', 'W', 'W', 'W', 'W', '.', '.', '.', '.', '.', 'W', 'W', 'W', 'W', 'W', 'W', '.', 'W', 'W', '.', 'W', 'W', '.', 'B',], // prettier-ignore
    ['B', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'W', 'W', 'W', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'B',], // prettier-ignore
    ['B', '.', 'W', 'W', 'W', 'W', 'W', 'W', 'W', '.', 'W', 'W', 'W', 'W', 'W', 'W', '.', 'W', 'W', 'W', 'W', 'W', 'W', '.', 'W', 'W', 'W', 'W', 'W', 'W', 'W', '.', 'B',], // prettier-ignore
    ['B', '.', 'W', '.', '.', '.', '.', '.', 'W', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'W', '.', '.', '.', '.', '.', 'W', '.', 'B',], // prettier-ignore
    ['B', '.', 'W', '.', '.', '.', '.', '.', 'W', '.', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', '.', 'W', '.', '.', '.', '.', '.', 'W', '.', 'B',], // prettier-ignore
    ['B', '.', 'W', 'W', 'W', 'W', '.', '.', 'W', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'W', '.', '.', 'W', 'W', 'W', 'W', '.', 'B',], // prettier-ignore
    ['B', '.', '.', '.', '.', 'W', '.', 'W', 'W', '.', 'W', 'W', 'W', '.', 'W', 'W', 'W', 'W', 'W', '.', 'W', 'W', 'W', '.', 'W', 'W', '.', 'W', '.', '.', '.', '.', 'B',], // prettier-ignore
    ['B', 'B', 'B', 'B', '.', 'W', 'W', 'W', '.', '.', 'W', '.', '.', '.', 'W', '.', '.', '.', 'W', '.', '.', '.', 'W', '.', '.', 'W', 'W', 'W', '.', 'B', 'B', 'B', 'B',], // prettier-ignore
    ['.', '.', '.', 'B', '.', '.', '.', '.', '.', 'W', 'W', '.', 'W', '.', 'W', 'W', 'W', 'W', 'W', '.', 'W', '.', 'W', 'W', '.', '.', '.', '.', '.', 'B', '.', '.', '.',], // prettier-ignore
    ['B', 'B', 'B', 'B', '.', 'W', 'W', 'W', '.', 'W', 'W', '.', 'W', '.', '.', '.', '.', '.', '.', '.', 'W', '.', 'W', 'W', '.', 'W', 'W', 'W', '.', 'B', 'B', 'B', 'B',], // prettier-ignore
    ['P', '.', '.', '.', '.', 'W', '.', 'W', '.', 'W', 'W', '.', 'W', '.', 'B', 'B', 'E', 'B', 'B', '.', 'W', '.', 'W', 'W', '.', 'W', '.', 'W', '.', '.', '.', '.', 'P',], // prettier-ignore
    ['B', 'B', 'B', 'B', '.', 'W', 'W', 'W', '.', 'W', 'W', '.', 'W', '.', 'B', 'Z', '.', 'X', 'B', '.', 'W', '.', 'W', 'W', '.', 'W', 'W', 'W', '.', 'B', 'B', 'B', 'B',], // prettier-ignore
    ['.', '.', '.', 'B', '.', '.', '.', '.', '.', '.', '.', '.', 'W', '.', 'B', 'C', '.', 'V', 'B', '.', 'W', '.', '.', '.', '.', '.', '.', '.', '.', 'B', '.', '.', '.',], // prettier-ignore
    ['B', 'B', 'B', 'B', '.', 'W', 'W', 'W', '.', 'W', 'W', '.', 'W', '.', 'B', 'B', 'B', 'B', 'B', '.', 'W', '.', 'W', 'W', '.', 'W', 'W', 'W', '.', 'B', 'B', 'B', 'B',], // prettier-ignore
    ['B', '.', '.', '.', '.', 'W', '.', 'W', '.', 'W', 'W', '.', 'W', '.', '.', '.', '.', '.', '.', '.', 'W', '.', 'W', 'W', '.', 'W', '.', 'W', '.', '.', '.', '.', 'B',], // prettier-ignore
    ['B', '.', 'W', 'W', 'W', 'W', '.', 'W', '.', 'W', 'W', '.', 'W', '.', 'W', 'W', 'W', 'W', 'W', '.', 'W', '.', 'W', 'W', '.', 'W', '.', 'W', 'W', 'W', 'W', '.', 'B',], // prettier-ignore
    ['B', '.', 'W', '.', '.', '.', '.', 'W', '.', 'W', 'W', '.', 'W', '.', 'W', '.', 'S', '.', 'W', '.', 'W', '.', 'W', 'W', '.', 'W', '.', '.', '.', '.', 'W', '.', 'B',], // prettier-ignore
    ['B', '.', 'W', '.', '.', '.', '.', 'W', '.', '.', 'W', '.', 'W', '.', 'W', '.', 'W', '.', 'W', '.', 'W', '.', 'W', '.', '.', 'W', '.', '.', '.', '.', 'W', '.', 'B',], // prettier-ignore
    ['B', '.', 'W', 'W', 'W', 'W', 'W', 'W', 'W', '.', '.', '.', '.', '.', '.', '.', 'W', '.', '.', '.', '.', '.', '.', '.', 'W', 'W', 'W', 'W', 'W', 'W', 'W', '.', 'B',], // prettier-ignore
    ['B', '.', '.', '.', '.', '.', '.', '.', 'W', '.', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', '.', 'W', '.', '.', '.', '.', '.', '.', '.', 'B',], // prettier-ignore
    ['B', '.', 'W', 'W', '.', 'W', 'W', '.', 'W', '.', 'W', 'W', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'W', 'W', '.', 'W', '.', 'W', 'W', '.', 'W', 'W', '.', 'B',], // prettier-ignore
    ['B', '.', 'W', 'W', '.', 'W', 'W', '.', 'W', '.', 'W', 'W', '.', 'W', 'W', 'W', 'W', 'W', 'W', 'W', '.', 'W', 'W', '.', 'W', '.', 'W', 'W', '.', 'W', 'W', '.', 'B',], // prettier-ignore
    ['B', '.', '.', '.', '.', '.', '.', '.', 'W', '.', 'W', 'W', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'W', 'W', '.', 'W', '.', '.', '.', '.', '.', '.', '.', 'B',], // prettier-ignore
    ['B', '.', 'W', 'W', '.', 'W', 'W', '.', 'W', '.', '.', '.', '.', 'B', 'B', 'B', '.', 'B', 'B', 'B', '.', '.', '.', '.', 'W', '.', 'W', 'W', '.', 'W', 'W', '.', 'B',], // prettier-ignore
    ['B', '.', 'W', 'W', '.', 'W', 'W', '.', 'W', '.', 'W', 'W', '.', 'B', '.', 'B', '.', 'B', '.', 'B', '.', 'W', 'W', '.', 'W', '.', 'W', 'W', '.', 'W', 'W', '.', 'B',], // prettier-ignore
    ['B', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'B', '.', 'B', '.', 'B', '.', 'B', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'B',], // prettier-ignore
    ['B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', '.', 'B', 'P', 'B', '.', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B',], // prettier-ignore
  ],
  setBoard: (board) => set({ board }),
}));
