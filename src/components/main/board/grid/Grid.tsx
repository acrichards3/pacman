import React from 'react';
import GridRow from './gridComponents/GridRow';
import styles from './Grid.module.scss';
import { BOARD } from '../configurations/main';
import { useRootStore } from '~/store/RootStore';

interface GridProps {
  displayGrid: boolean;
}

export default function Grid(props: GridProps) {
  const board = useRootStore().mainBoard.board;
  return (
    <div className={styles.container}>
      {board.map((row, y) => {
        return (
          <GridRow key={y} displayGrid={props.displayGrid} y={y} row={row} />
        );
      })}
    </div>
  );
}
