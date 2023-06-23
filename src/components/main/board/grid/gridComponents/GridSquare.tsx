import React from 'react';
import classNames from 'classnames';
import Dot from '../../pieces/Dot';
import styles from './GridSquare.module.scss';
import Wall from '../../pieces/Wall';
import Player from '~/components/common/Player';
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
      case 'G':
        return <div>G</div>;
      case 'E':
        return <div>-</div>;
      case 'S':
        return <Player isPlaying />;
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
