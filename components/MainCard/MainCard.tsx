import { FC } from 'react';
import { Card } from '../Card/Card';
import styles from './MainCard.module.scss';

import { split } from '../utils/funcs';

interface MainCardProps {
  heading: string;
}

const MainCard: FC<MainCardProps> = ({ heading }) => {
  return (
    <div className={styles.mainContainer}>
      <h2 className={styles.containerHeading}>{split(heading, 4)}</h2>

      <Card reset="reset" />
    </div>
  );
};

export default MainCard;
