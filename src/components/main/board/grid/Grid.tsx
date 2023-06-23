import React from 'react';
import GridRow from './gridComponents/GridRow';
import GridSquare from './gridComponents/GridSquare';
import styles from './Grid.module.scss';
import { BOARD } from '../configurations/main';
import type { Terrain } from '~/types/Terrain';
import type { BoardConfig } from '~/types/BoardConfig';

interface GridProps {
  displayGrid: boolean;
}

export default function Grid(props: GridProps) {
  return (
    <div className={styles.container}>
      {BOARD.map((row, y) => {
        return (
          <GridRow key={y} displayGrid={props.displayGrid} y={y} row={row} />
        );
      })}
    </div>
  );
}
