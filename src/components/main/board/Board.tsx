import React from 'react';
import Grid from './grid/Grid';
import styles from './Board.module.scss';

export default function Board() {
  const displayGrid = false;
  return (
    <div className={styles.board}>
      <Grid displayGrid={displayGrid} />
    </div>
  );
}
