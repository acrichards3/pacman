import React from 'react';
import classNames from 'classnames';
import styles from './Player.module.scss';

type Direction = 'up' | 'down' | 'left' | 'right';

interface PlayerProps {
  x: number;
  y: number;
  status: 'loading' | 'moving' | 'dead';
}

export default function Player(props: PlayerProps) {
  const [direction, setDirection] = React.useState<Direction>('right');
  if (typeof window !== 'undefined') {
    document.addEventListener('keydown', (e) => {
      switch (e.key) {
        case 'ArrowUp':
          setDirection('up');
          break;
        case 'ArrowDown':
          setDirection('down');
          break;
        case 'ArrowLeft':
          setDirection('left');
          break;
        case 'ArrowRight':
          setDirection('right');
          break;
        default:
          break;
      }
    });
  }

  return (
    <div className={styles.player}>
      <div
        className={classNames(styles.mouth, {
          [styles.loading as string]: props.status === 'loading',
          [styles.moving as string]: props.status === 'moving',
          [styles.dead as string]: props.status === 'dead',
          [styles.up as string]: direction === 'up',
          [styles.down as string]: direction === 'down',
          [styles.left as string]: direction === 'left',
        })}
      ></div>
    </div>
  );
}
