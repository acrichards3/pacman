import { create } from 'zustand';
import type { BoardConfig } from '~/types/BoardConfig';

interface Board {
  board: BoardConfig[][];
  setBoard: (board: BoardConfig[][]) => void;
}

export const useMain = create<Board>((set) => ({
  board: [
    ['B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', '.', 'B', 'P', 'B', '.', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B',], // prettier-ignore
    ['B', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'B', '.', 'B', '.', 'B', '.', 'B', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'B',], // prettier-ignore
    ['B', 'o', 'W', 'W', 'o', 'W', 'W', 'o', 'W', 'W', 'W', 'W', 'o', 'B', '.', 'B', '.', 'B', '.', 'B', 'o', 'W', 'W', 'W', 'W', 'o', 'W', 'W', 'o', 'W', 'W', 'o', 'B',], // prettier-ignore
    ['B', 'o', 'W', 'W', 'o', 'W', 'W', 'o', 'W', '.', '.', 'W', 'o', 'B', 'B', 'B', '.', 'B', 'B', 'B', 'o', 'W', '.', '.', 'W', 'o', 'W', 'W', 'o', 'W', 'W', 'o', 'B',], // prettier-ignore
    ['B', 'o', 'o', 'o', 'O', 'o', 'o', 'o', 'W', 'W', 'W', 'W', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'W', 'W', 'W', 'W', 'o', 'o', 'o', 'O', 'o', 'o', 'o', 'B',], // prettier-ignore
    ['B', 'o', 'W', 'W', 'o', 'W', 'W', 'o', 'o', 'o', 'o', 'o', 'o', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'o', 'o', 'o', 'o', 'o', 'o', 'W', 'W', 'o', 'W', 'W', 'o', 'B',], // prettier-ignore
    ['B', 'o', 'W', 'W', 'o', 'W', 'W', 'o', 'W', 'W', 'W', 'W', 'W', 'W', 'o', 'o', 'O', 'o', 'o', 'W', 'W', 'W', 'W', 'W', 'W', 'o', 'W', 'W', 'o', 'W', 'W', 'o', 'B',], // prettier-ignore
    ['B', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'W', 'W', 'W', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'B',], // prettier-ignore
    ['B', 'o', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'o', 'W', 'W', 'W', 'W', 'W', 'W', 'o', 'W', 'W', 'W', 'W', 'W', 'W', 'o', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'o', 'B',], // prettier-ignore
    ['B', 'o', 'W', '.', '.', '.', '.', '.', 'W', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'W', '.', '.', '.', '.', '.', 'W', 'o', 'B',], // prettier-ignore
    ['B', 'o', 'W', '.', '.', '.', '.', '.', 'W', 'o', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'o', 'W', '.', '.', '.', '.', '.', 'W', 'o', 'B',], // prettier-ignore
    ['B', 'o', 'W', 'W', 'W', 'W', '.', '.', 'W', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'W', '.', '.', 'W', 'W', 'W', 'W', 'o', 'B',], // prettier-ignore
    ['B', 'o', 'o', 'o', 'o', 'W', '.', 'W', 'W', 'o', 'W', 'W', 'W', 'o', 'W', 'W', 'W', 'W', 'W', 'o', 'W', 'W', 'W', 'o', 'W', 'W', '.', 'W', 'o', 'o', 'o', 'o', 'B',], // prettier-ignore
    ['B', 'B', 'B', 'B', 'o', 'W', 'W', 'W', 'o', 'o', 'W', 'o', 'o', 'o', 'W', '.', '.', '.', 'W', 'o', 'o', 'o', 'W', 'o', 'o', 'W', 'W', 'W', 'o', 'B', 'B', 'B', 'B',], // prettier-ignore
    ['.', '.', '.', 'B', 'o', 'o', 'o', 'o', 'o', 'W', 'W', 'o', 'W', 'o', 'W', 'W', 'W', 'W', 'W', 'o', 'W', 'o', 'W', 'W', 'o', 'o', 'o', 'o', 'o', 'B', '.', '.', '.',], // prettier-ignore
    ['B', 'B', 'B', 'B', 'o', 'W', 'W', 'W', 'o', 'W', 'W', 'o', 'W', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'W', 'o', 'W', 'W', 'o', 'W', 'W', 'W', 'o', 'B', 'B', 'B', 'B',], // prettier-ignore
    ['P', '.', '.', '.', 'o', 'W', '.', 'W', 'o', 'W', 'W', 'o', 'W', 'o', 'B', 'B', 'E', 'B', 'B', 'o', 'W', 'o', 'W', 'W', 'o', 'W', '.', 'W', 'o', '.', '.', '.', 'P',], // prettier-ignore
    ['B', 'B', 'B', 'B', 'o', 'W', 'W', 'W', 'o', 'W', 'W', 'o', 'W', 'o', 'B', 'G', '.', 'G', 'B', 'o', 'W', 'o', 'W', 'W', 'o', 'W', 'W', 'W', 'o', 'B', 'B', 'B', 'B',], // prettier-ignore
    ['.', '.', '.', 'B', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'O', 'W', 'o', 'B', 'G', '.', 'G', 'B', 'o', 'W', 'O', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'B', '.', '.', '.',], // prettier-ignore
    ['B', 'B', 'B', 'B', 'o', 'W', 'W', 'W', 'o', 'W', 'W', 'o', 'W', 'o', 'B', 'B', 'B', 'B', 'B', 'o', 'W', 'o', 'W', 'W', 'o', 'W', 'W', 'W', 'o', 'B', 'B', 'B', 'B',], // prettier-ignore
    ['B', 'o', 'o', 'o', 'o', 'W', '.', 'W', 'o', 'W', 'W', 'o', 'W', 'o', 'o', 'o', '.', 'o', 'o', 'o', 'W', 'o', 'W', 'W', 'o', 'W', '.', 'W', 'o', 'o', 'o', 'o', 'B',], // prettier-ignore
    ['B', 'o', 'W', 'W', 'W', 'W', '.', 'W', 'o', 'W', 'W', 'o', 'W', 'o', 'W', 'W', 'W', 'W', 'W', 'o', 'W', 'o', 'W', 'W', 'o', 'W', '.', 'W', 'W', 'W', 'W', 'o', 'B',], // prettier-ignore
    ['B', 'o', 'W', '.', '.', '.', '.', 'W', 'o', 'W', 'W', 'o', 'W', 'o', 'W', 'o', 'S', 'o', 'W', 'o', 'W', 'o', 'W', 'W', 'o', 'W', '.', '.', '.', '.', 'W', 'o', 'B',], // prettier-ignore
    ['B', 'o', 'W', '.', '.', '.', '.', 'W', 'o', 'o', 'W', 'o', 'W', 'o', 'W', 'o', 'W', 'o', 'W', 'o', 'W', 'o', 'W', 'o', 'o', 'W', '.', '.', '.', '.', 'W', 'o', 'B',], // prettier-ignore
    ['B', 'o', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'W', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'o', 'B',], // prettier-ignore
    ['B', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'W', 'o', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'o', 'W', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'B',], // prettier-ignore
    ['B', 'o', 'W', 'W', 'o', 'W', 'W', 'o', 'W', 'o', 'W', 'W', 'o', 'o', 'o', 'o', 'O', 'o', 'o', 'o', 'o', 'W', 'W', 'o', 'W', 'o', 'W', 'W', 'o', 'W', 'W', 'o', 'B',], // prettier-ignore
    ['B', 'o', 'W', 'W', 'o', 'W', 'W', 'o', 'W', 'o', 'W', 'W', 'o', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'o', 'W', 'W', 'o', 'W', 'o', 'W', 'W', 'o', 'W', 'W', 'o', 'B',], // prettier-ignore
    ['B', 'o', 'o', 'o', 'O', 'o', 'o', 'o', 'W', 'o', 'W', 'W', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'W', 'W', 'o', 'W', 'o', 'o', 'o', 'O', 'o', 'o', 'o', 'B',], // prettier-ignore
    ['B', 'o', 'W', 'W', 'o', 'W', 'W', 'o', 'W', 'o', 'o', 'o', 'o', 'B', 'B', 'B', '.', 'B', 'B', 'B', 'o', 'o', 'o', 'o', 'W', 'o', 'W', 'W', 'o', 'W', 'W', 'o', 'B',], // prettier-ignore
    ['B', 'o', 'W', 'W', 'o', 'W', 'W', 'o', 'W', 'o', 'W', 'W', 'o', 'B', '.', 'B', '.', 'B', '.', 'B', 'o', 'W', 'W', 'o', 'W', 'o', 'W', 'W', 'o', 'W', 'W', 'o', 'B',], // prettier-ignore
    ['B', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'B', '.', 'B', '.', 'B', '.', 'B', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'B',], // prettier-ignore
    ['B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', '.', 'B', 'P', 'B', '.', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B',], // prettier-ignore
  ],
  setBoard: (board) => set({ board }),
}));
