import React from 'react';
import Grid from './grid/Grid';
import styles from './Board.module.scss';

export default function Board() {
  const displayGrid = true;
  return (
    <div className={styles.board}>
      <Grid displayGrid={displayGrid} />
    </div>
  );
}
