import React from 'react';
import classNames from 'classnames';
import Dot from '../../pieces/Dot';
import styles from './GridSquare.module.scss';
import Wall from '../../pieces/Wall';
import Player from '~/components/common/Player';
import Ghost from '~/components/common/Ghost';
import GhostExit from '../../pieces/GhostExit';
import { removeConnectedWallBorders } from '~/functions/Walls';
import { useRootStore } from '~/store/RootStore';
import type { BoardConfig } from '~/types/BoardConfig';
import type { Orientation } from '~/types/Orientation';

interface GridSquareProps {
  displayGrid: boolean;
  terrainType: BoardConfig;
  wallOrientation?: Orientation;
  edgeWallPosition?: 'top' | 'right' | 'bottom' | 'left';
  x: number;
  y: number;
}

export default function GridSquare(props: GridSquareProps) {
  const board = useRootStore().mainBoard.board;
  const handleTerrain = (): JSX.Element | null => {
    switch (props.terrainType) {
      case 'Z':
        console.log('Red Ghost Spawn:', props.x, props.y);
        return <Ghost color="red" direction="right" />;
      case 'X':
        console.log('Pink Ghost Spawn:', props.x, props.y);
        return <Ghost color="pink" direction="left" />;
      case 'C':
        console.log('Blue Ghost Spawn:', props.x, props.y);
        return <Ghost color="blue" direction="right" />;
      case 'V':
        console.log('Orange Ghost Spawn:', props.x, props.y);
        return <Ghost color="orange" direction="left" />;
      case 'E':
        return <GhostExit />;
      case 'S':
        console.log('Player Spawn:', props.x, props.y);
        return <Player x={props.x} y={props.y} status={'moving'} />;
      case 'P':
        return <div>P</div>;
      case 'B':
        return (
          <Wall
            includeBorder={removeConnectedWallBorders(props.x, props.y, board)}
            isBorder
          />
        );
      case '.':
        return null;
      case 'W':
        return (
          <Wall
            includeBorder={removeConnectedWallBorders(props.x, props.y, board)}
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

  return (
    <div
      className={classNames(styles.square, {
        [styles.hideGrid as string]: !props.displayGrid,
      })}
    >
      {handleTerrain()}
    </div>
  );
}
