import React from 'react';
import Scoreboard from './scoreboard/Scoreboard';
import Board from './board/Board';
import PlayerInfo from './playerInfo/PlayerInfo';
import styles from './Main.module.scss';

export default function Main() {
  return (
    <div className={styles.container}>
      <Scoreboard />
      <Board />
      <PlayerInfo />
    </div>
  );
}
