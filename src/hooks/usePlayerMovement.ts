import { useRootStore } from '~/store/RootStore';
import type { BoardConfig } from '~/types/BoardConfig';

type Direction = 'up' | 'down' | 'left' | 'right';

export const usePlayerMovement = (direction: Direction) => {
  const playerScore = useRootStore().playerScore.playerScore;
  const setPlayerScore = useRootStore().playerScore.setPlayerScore;
  const highScore = useRootStore().playerScore.highScore;
  const setHighScore = useRootStore().playerScore.setHighScore;
  const position = useRootStore().entityPosition.player;
  const setPlayerPosition = useRootStore().entityPosition.setPlayer;
  const board = useRootStore().mainBoard.board;
  const setBoard = useRootStore().mainBoard.setBoard;

  setHighScore(Math.max(playerScore, highScore));

  const handleMovement = (x: number, y: number) => {
    const newBoard = [...board];
    if (
      board[x]?.[y] === 'W' ||
      board[x]?.[y] === 'B' ||
      board[x]?.[y] === 'E'
    ) {
      return;
    }
  };

  const checkValidMove = (currDirection: Direction) => {
    const directions = ['up', 'down', 'left', 'right'];
    const x = position[0];
    const y = position[1];
    const playerPosition = board[x]?.[y];
    for (let i = 0; i < directions.length; i++) {
      const direction = directions[i];
      if (!direction) return;
      if (currDirection === direction) {
        switch (direction) {
          case 'up':
            handleMovement(x, y - 1);
            break;
          case 'down':
            handleMovement(x, y + 1);
            break;
          case 'left':
            handleMovement(x - 1, y);
            break;
          case 'right':
            handleMovement(x + 1, y);
            break;
        }
      }
    }
  };
};
