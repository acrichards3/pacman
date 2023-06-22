import React from 'react';
import classNames from 'classnames';
import styles from './Dot.module.scss';

interface DotProps {
  size: 'small' | 'large';
}

export default function Dot(props: DotProps) {
  return (
    <div
      className={classNames(styles.dot, {
        [styles.large as string]: props.size === 'large',
      })}
    ></div>
  );
}
