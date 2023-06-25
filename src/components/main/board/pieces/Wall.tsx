import React from 'react';
import classNames from 'classnames';
import styles from './Wall.module.scss';

type Direction = 'top' | 'bottom' | 'left' | 'right';

interface WallProps {
  includeBorder: Direction[];
  isBorder?: boolean;
}

export default function Wall(props: WallProps) {
  return (
    <div
      className={classNames(styles.wall, {
        [styles.top as string]: props.includeBorder?.includes('top'),
        [styles.right as string]: props.includeBorder?.includes('right'),
        [styles.bottom as string]: props.includeBorder?.includes('bottom'),
        [styles.left as string]: props.includeBorder?.includes('left'),
        [styles.border as string]: props.isBorder,
      })}
    ></div>
  );
}
