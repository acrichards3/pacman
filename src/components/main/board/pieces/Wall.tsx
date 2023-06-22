import React from 'react';
import styles from './Wall.module.scss';

interface WallProps {
  orientation: 'horizontal' | 'vertical';
  type: 'edge' | 'wall' | 'joined';
}

export default function Wall(props: WallProps) {
  return <div>Wall</div>;
}
