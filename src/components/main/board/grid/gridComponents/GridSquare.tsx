import React from 'react';
import classNames from 'classnames';
import Dot from '../../pieces/Dot';
import styles from './GridSquare.module.scss';
import type { Terrain } from '~/types/Terrain';

interface GridSquareProps {
  displayGrid: boolean;
  terrainType: Terrain;
  x: number;
  y: number;
}

export default function GridSquare(props: GridSquareProps) {
  const handleTerrain = () => {
    switch (props.terrainType) {
      case 'edgeWall':
        return <div>EW</div>;
      case 'connectorWall':
        return <div>CW</div>;
      case 'wall':
        return <div>NW</div>;
      case 'smallDot':
        return <Dot size="small" />;
      case 'largeDot':
        return <Dot size="large" />;
      case 'empty':
        return <div></div>;
      default:
        return null;
    }
  };

  return (
    <div
      className={classNames(styles.square, {
        [styles.hideGrid as string]: !props.displayGrid,
      })}
    >
      {handleTerrain()}
    </div>
  );
}
