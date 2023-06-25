import React from 'react';
import classNames from 'classnames';
import styles from './Player.module.scss';

type Direction = 'up' | 'down' | 'left' | 'right' | null;

interface PlayerProps {
  x: number;
  y: number;
  status: 'loading' | 'moving' | 'dead';
}

export default function Player(props: PlayerProps) {
  const [direction, setDirection] = React.useState<Direction>(null);
  const [position, setPosition] = React.useState<{x: number, y: number}>({ x: props.x - 15, y: props.y - 21 }); // prettier-ignore
  const intervalRef = React.useRef<NodeJS.Timeout | undefined>(undefined);

  const updatePlayerPosition = (playerDirection: Direction) => {
    const updateBy1 = () => {
      switch (playerDirection) {
        case 'up':
          setPosition((prevPosition) => ({
            ...prevPosition,
            y: prevPosition.y - 1,
          }));
          break;
        case 'down':
          setPosition((prevPosition) => ({
            ...prevPosition,
            y: prevPosition.y + 1,
          }));
          break;
        case 'left':
          setPosition((prevPosition) => ({
            ...prevPosition,
            x: prevPosition.x - 1,
          }));
          break;
        case 'right':
          setPosition((prevPosition) => ({
            ...prevPosition,
            x: prevPosition.x + 1,
          }));
          break;
        default:
          break;
      }
    };

    // Clear the previous interval if it exists
    if (intervalRef.current !== undefined) {
      clearInterval(intervalRef.current);
    }

    // determines speed of player, lower is faster
    intervalRef.current = setInterval(updateBy1, 8);
  };

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
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
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  React.useEffect(() => {
    // Clear the previous interval before updating player position
    if (intervalRef.current !== undefined) {
      clearInterval(intervalRef.current);
    }

    updatePlayerPosition(direction);

    // Clean up the interval if the component unmounts
    return () => {
      if (intervalRef.current !== undefined) {
        clearInterval(intervalRef.current);
      }
    };
  }, [direction]);

  return (
    <div
      style={{
        position: 'absolute',
        top: position.y,
        left: position.x,
      }}
      className={styles.player}
    >
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
