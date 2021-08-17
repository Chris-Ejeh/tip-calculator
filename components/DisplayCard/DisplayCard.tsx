import { FC } from 'react';
import ResetButton from '../Button/ResetButton';
import styles from './DisplayCard.module.scss';

interface DisplayCardProps {
  reset: string;
}

const DisplayCard: FC<DisplayCardProps> = ({ reset }) => {
  return (
    <div className={styles.container}>
      <div className={styles.amount}>
        <div className={styles.text}>
          <h4 className={styles.title}>Tip Amount</h4>
          <p className={styles.subTitle}>/ person</p>
        </div>
        <div className={styles.number}>
          <h1 className={styles.value}>$0.00</h1>
        </div>
      </div>

      <div className={styles.total}>
        <div className={styles.text}>
          <h4 className={styles.title}>Total</h4>
          <p className={styles.subTitle}>/ person</p>
        </div>
        <div className={styles.number}>
          <h1 className={styles.value}>$0.00</h1>
        </div>
      </div>

      <ResetButton reset={reset} />
    </div>
  );
};
export default DisplayCard;
