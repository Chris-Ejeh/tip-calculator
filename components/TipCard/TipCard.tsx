import { FC } from 'react';
import { Card } from '../Card/Card';
import styles from './TipCard.module.scss';

interface TipCardProps {}

export const TipCard: FC<TipCardProps> = ({}) => {
  return (
    <div className={styles.mainContainer}>
      <h2 className={styles.containerHeading}>SPLITTER</h2>
      <div className={styles.tipContainer}>
        <Card />
      </div>
    </div>
  );
};
