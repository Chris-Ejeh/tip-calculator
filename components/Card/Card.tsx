import { FC } from 'react';
import TipButton from '../Button/TipButton';
import DisplayCard from '../DisplayCard/DisplayCard';

import styles from './Card.module.scss';

const ButtonValues = ['5%', '10%', '15%', '25%', '50%', 'Custom'];

interface CardProps {
  reset: string;
}

export const Card: FC<CardProps> = ({ reset }) => {
  return (
    <div className={styles.container}>
      <TipButton value={ButtonValues} />
      <DisplayCard reset={reset} />
    </div>
  );
};
