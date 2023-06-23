import React from 'react';
import GridSquare from './GridSquare';
import styles from './GridRow.module.scss';
import type { BoardConfig } from '~/types/BoardConfig';

interface GridRowProps {
  displayGrid: boolean;
  row: Array<BoardConfig>;
  y: number;
}

export default function GridRow(props: GridRowProps) {
  return (
    <div className={styles.gridRow}>
      {props.row.map((square, x) => {
        return (
          <GridSquare
            key={x}
            x={x}
            y={props.y}
            terrainType={square}
            displayGrid={props.displayGrid}
          />
        );
      })}
    </div>
  );
}
