import React from 'react';
import classNames from 'classnames';
import Dot from '../../pieces/Dot';
import styles from './GridSquare.module.scss';
import Wall from '../../pieces/Wall';
import Player from '~/components/common/Player';
import Ghost from '~/components/common/Ghost';
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
  const handleTerrain = (): JSX.Element | null => {
    switch (props.terrainType) {
      case 'Z':
        return <Ghost color="red" direction="right" />;
      case 'X':
        return <Ghost color="pink" direction="left" />;
      case 'C':
        return <Ghost color="blue" direction="right" />;
      case 'V':
        return <Ghost color="orange" direction="left" />;
      case 'E':
        return <div>-</div>;
      case 'S':
        return <Player x={props.x} y={props.y} status={'moving'} />;
      case 'P':
        return <div>P</div>;
      case 'B':
        return <Wall />;
      case '.':
        return null;
      case 'W':
        return <Wall />;
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
