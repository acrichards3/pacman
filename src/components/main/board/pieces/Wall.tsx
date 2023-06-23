import React from 'react';
import classNames from 'classnames';
import styles from './Wall.module.scss';

interface WallProps {
  top?: boolean;
  right?: boolean;
  bottom?: boolean;
  left?: boolean;
}

export default function Wall(props: WallProps) {
  return (
    <div
      className={classNames(styles.wall, {
        [styles.top as string]: props.top,
        [styles.right as string]: props.right,
        [styles.bottom as string]: props.bottom,
        [styles.left as string]: props.left,
      })}
    ></div>
  );
}
