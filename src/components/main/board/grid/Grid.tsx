import React from 'react';
import classNames from 'classnames';
import GridRow from './gridComponents/GridRow';
import styles from './Grid.module.scss';

interface GridProps {
  displayGrid: boolean;
}

export default function Grid(props: GridProps) {
  const rows = Array.from(Array(33).keys());
  return (
    <div className={styles.container}>
      {rows.map((row) => {
        return <GridRow displayGrid={props.displayGrid} key={row} />;
      })}
    </div>
  );
}