import React from 'react';
import classNames from 'classnames';
import styles from './Wall.module.scss';
import type { Orientation } from '~/types/Orientation';
import type { WallType } from '~/types/WallType';

interface WallProps {
  orientation: Orientation;
  wallType: WallType;
  edgeWallPosition?: 'top' | 'right' | 'bottom' | 'left';
}

export default function Wall(props: WallProps) {
  return (
    <div
      className={classNames(styles.wall, {
        [styles.horizontal as string]: props.orientation === 'horizontal',
        [styles.vertical as string]: props.orientation === 'vertical',
        [styles.edgeWall as string]: props.wallType === 'edgeWall',
        [styles.edgeWallRight as string]: props.edgeWallPosition === 'right' || props.edgeWallPosition === 'top', // prettier-ignore
        [styles.connectorWall as string]: props.wallType === 'connectorWall',
      })}
    ></div>
  );
}
