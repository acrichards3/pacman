import React from 'react';
import classNames from 'classnames';
import Dot from '../../pieces/Dot';
import styles from './GridSquare.module.scss';
import Wall from '../../pieces/Wall';
import type { Terrain } from '~/types/Terrain';
import type { Orientation } from '~/types/Orientation';

interface GridSquareProps {
  displayGrid: boolean;
  terrainType: Terrain;
  wallOrientation?: Orientation;
  edgeWallPosition?: 'top' | 'right' | 'bottom' | 'left';
  x: number;
  y: number;
}

export default function GridSquare(props: GridSquareProps) {
  const handleTerrain = () => {
    switch (props.terrainType) {
      case 'edgeWall':
        return (
          <Wall
            orientation={props.wallOrientation ?? 'horizontal'}
            wallType="edgeWall"
            edgeWallPosition={props.edgeWallPosition}
          />
        );
      case 'connectorWall':
        return (
          <Wall
            orientation={props.wallOrientation ?? 'horizontal'}
            wallType="connectorWall"
          />
        );
      case 'wall':
        return (
          <Wall
            orientation={props.wallOrientation ?? 'horizontal'}
            wallType="wall"
          />
        );
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
