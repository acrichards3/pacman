import React from 'react';
import classNames from 'classnames';
import styles from './GridSquare.module.scss';

interface GridSquareProps {
  displayGrid: boolean;
}

export default function GridSquare(props: GridSquareProps) {
  return (
    <div
      className={classNames(styles.square, {
        [styles.hideGrid as string]: !props.displayGrid,
      })}
    >
      <div>.</div>
    </div>
  );
}
