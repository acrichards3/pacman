import React from 'react';
import classNames from 'classnames';
import styles from './GridSquare.module.scss';
import { generateTerrain } from '~/functions/Terrain';
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

  return (
    <div
      className={classNames(styles.square, {
        [styles.hideGrid as string]: !props.displayGrid,
      })}
    >
      {generateTerrain({
        x: props.x,
        y: props.y,
        terrainType: props.terrainType,
        board: board,
      })}
    </div>
  );
}
