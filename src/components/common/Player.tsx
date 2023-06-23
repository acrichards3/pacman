import React from 'react';
import classNames from 'classnames';
import styles from './Player.module.scss';

interface PlayerProps {
  x: number;
  y: number;
  status: 'loading' | 'moving' | 'dead';
}

export default function Player(props: PlayerProps) {
  const mouthClasses = classNames(styles.mouth, {
    [styles.loading as string]: props.status === 'loading',
    [styles.moving as string]: props.status === 'moving',
    [styles.dead as string]: props.status === 'dead',
  });

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    console.log(e.key);
  };

  console.log('PLAYER POSITION:', `X: ${props.x}, Y: ${props.y}`);

  return (
    <div className={styles.player} onKeyDown={handleKeyDown}>
      <div className={mouthClasses}></div>
    </div>
  );
}
