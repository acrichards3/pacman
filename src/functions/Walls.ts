import type { BoardConfig } from '~/types/BoardConfig';

type Direction = 'top' | 'bottom' | 'left' | 'right';

export const removeConnectedWallBorders = (
  x: number,
  y: number,
  board: BoardConfig[][]
): Direction[] => {
  const top = board[y - 1]?.[x];
  const bottom = board[y + 1]?.[x];
  const left = board[y]?.[x - 1];
  const right = board[y]?.[x + 1];

  const bordersToExclude: Direction[] = [];

  //top
  if (top === 'W' || top === 'B' || top === 'E') {
    bordersToExclude.push('top');
  }
  //bottom
  if (bottom === 'W' || bottom === 'B' || bottom === 'E') {
    bordersToExclude.push('bottom');
  }
  //left
  if (left === 'W' || left === 'B') {
    bordersToExclude.push('left');
  }
  //right
  if (right === 'W' || right === 'B') {
    bordersToExclude.push('right');
  }

  return bordersToExclude;
};
