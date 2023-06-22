import React from 'react';
import GridSquare from './GridSquare';
import styles from './GridRow.module.scss';

interface GridRowProps {
  displayGrid: boolean;
}

export default function GridRow(props: GridRowProps) {
  const squaresPerRow = Array.from(Array(33).keys());
  return (
    <div className={styles.gridRow}>
      {squaresPerRow.map((square) => {
        return <GridSquare displayGrid={props.displayGrid} key={square} />;
      })}
    </div>
  );
}
