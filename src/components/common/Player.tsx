import React from 'react';
import styles from './Player.module.scss';

interface PlayerProps {
  isPlaying: boolean;
}

export default function Player(props: PlayerProps) {
  return (
    props.isPlaying && (
      <div className={styles.player}>
        <div className={styles.mouth}></div>
      </div>
    )
  );
}
