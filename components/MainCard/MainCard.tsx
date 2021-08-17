import { FC } from 'react';
import { Card } from '../Card/Card';
import styles from './MainCard.module.scss';

import { split } from '../utils/funcs';

interface MainCardProps {
  heading: string;
  reset: string;
}

const MainCard: FC<MainCardProps> = ({ heading, reset }) => {
  return (
    <div className={styles.mainContainer}>
      <h2 className={styles.containerHeading}>{split(heading, 4)}</h2>
      <div className={styles.tipContainer}>
        <Card reset={reset} />
      </div>
    </div>
  );
};

export default MainCard;
