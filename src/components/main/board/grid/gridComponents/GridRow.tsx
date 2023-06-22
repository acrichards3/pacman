import React from 'react';
import GridSquare from './GridSquare';
import Dot from '../../pieces/Dot';
import styles from './GridRow.module.scss';

interface GridRowProps {
  displayGrid: boolean;
  y: number;
}

export default function GridRow(props: GridRowProps) {
  const squaresPerRow = Array.from(Array(33).keys());
  return (
    <div className={styles.gridRow}>
      {squaresPerRow.map((square, x) => {
        return (
          <GridSquare
            x={x}
            y={props.y}
            terrainType={x % 2 === 0 ? 'smallDot' : 'largeDot'}
            displayGrid={props.displayGrid}
            key={square}
          />
        );
      })}
    </div>
  );
}
