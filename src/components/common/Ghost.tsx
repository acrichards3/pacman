import React from 'react';
import pinkUp from '~/../public/ghosts/pinkUp.gif';
import pinkDown from '~/../public/ghosts/pinkDown.gif';
import pinkLeft from '~/../public/ghosts/pinkLeft.gif';
import pinkRight from '~/../public/ghosts/pinkRight.gif';
import blueUp from '~/../public/ghosts/blueUp.gif';
import blueDown from '~/../public/ghosts/blueDown.gif';
import blueLeft from '~/../public/ghosts/blueLeft.gif';
import blueRight from '~/../public/ghosts/blueRight.gif';
import orangeUp from '~/../public/ghosts/orangeUp.gif';
import orangeDown from '~/../public/ghosts/orangeDown.gif';
import orangeLeft from '~/../public/ghosts/orangeLeft.gif';
import orangeRight from '~/../public/ghosts/orangeRight.gif';
import redUp from '~/../public/ghosts/redUp.gif';
import redDown from '~/../public/ghosts/redDown.gif';
import redLeft from '~/../public/ghosts/redLeft.gif';
import redRight from '~/../public/ghosts/redRight.gif';
import Image from 'next/image';
import styles from './Ghost.module.scss';

interface GhostProps {
  color: 'pink' | 'blue' | 'orange' | 'red';
  direction: 'up' | 'down' | 'left' | 'right';
}

export default function Ghost(props: GhostProps) {
  const handleGhost = () => {
    switch (props.color) {
      case 'pink':
        switch (props.direction) {
          case 'up':
            return pinkUp;
          case 'down':
            return pinkDown;
          case 'left':
            return pinkLeft;
          case 'right':
            return pinkRight;
        }
      case 'blue':
        switch (props.direction) {
          case 'up':
            return blueUp;
          case 'down':
            return blueDown;
          case 'left':
            return blueLeft;
          case 'right':
            return blueRight;
        }
      case 'orange':
        switch (props.direction) {
          case 'up':
            return orangeUp;
          case 'down':
            return orangeDown;
          case 'left':
            return orangeLeft;
          case 'right':
            return orangeRight;
        }
      case 'red':
        switch (props.direction) {
          case 'up':
            return redUp;
          case 'down':
            return redDown;
          case 'left':
            return redLeft;
          case 'right':
            return redRight;
        }
    }
  };
  return (
    <Image
      src={handleGhost()}
      alt={`Ghost ${props.color} facing ${props.direction}`}
      className={styles.ghost}
    />
  );
}
