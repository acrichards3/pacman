import Ghost from '~/components/entities/Ghost';
import GhostExit from '~/components/main/board/pieces/GhostExit';
import Player from '~/components/entities/Player';
import Wall from '~/components/main/board/pieces/Wall';
import Dot from '~/components/main/board/pieces/Dot';
import { removeConnectedWallBorders } from './Walls';
import type { BoardConfig } from '~/types/BoardConfig';

interface Params {
  terrainType: BoardConfig;
  board: BoardConfig[][];
  x: number;
  y: number;
}

export const generateTerrain = (params: Params) => {
  switch (params.terrainType) {
    case 'Z':
      // console.log('Red Ghost Spawn:', params.x, params.y);
      return <Ghost color="red" direction="right" />;
    case 'X':
      // console.log('Pink Ghost Spawn:', params.x, params.y);
      return <Ghost color="pink" direction="left" />;
    case 'C':
      // console.log('Blue Ghost Spawn:', params.x, params.y);
      return <Ghost color="blue" direction="right" />;
    case 'V':
      // console.log('Orange Ghost Spawn:', params.x, params.y);
      return <Ghost color="orange" direction="left" />;
    case 'E':
      return <GhostExit />;
    case 'S':
      // console.log('Player Spawn:', params.x, params.y);
      return <Player x={params.x} y={params.y} status={'moving'} />;
    case 'P':
      return <div>P</div>;
    case 'B':
      return (
        <Wall
          includeBorder={removeConnectedWallBorders(
            params.x,
            params.y,
            params.board
          )}
          isBorder
        />
      );
    case '.':
      return null;
    case 'W':
      return (
        <Wall
          includeBorder={removeConnectedWallBorders(
            params.x,
            params.y,
            params.board
          )}
        />
      );
    case 'o':
      return <Dot size="small" />;
    case 'O':
      return <Dot size="large" />;
    default:
      return null;
  }
};
