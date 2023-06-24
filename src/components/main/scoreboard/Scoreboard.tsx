import React from 'react';
import { useRootStore } from '~/store/RootStore';
import styles from './Scoreboard.module.scss';

export default function Scoreboard() {
  const highScore = useRootStore().playerScore.highScore;
  const score = useRootStore().playerScore.playerScore;
  return (
    <div className={styles.wrapper}>
      <div className={styles.scoreboard}>
        <h2 className={styles.headText}>SCOREBOARD</h2>
      </div>
      <div className={styles.scores}>
        <h3 className={styles.score}>{`High Score: ${highScore}`}</h3>
        <h3 className={styles.score}>{`Score: ${score}`}</h3>
      </div>
    </div>
  );
}
