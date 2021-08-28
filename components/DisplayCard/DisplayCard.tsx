import { FC, MouseEventHandler } from 'react';
import styles from './DisplayCard.module.scss';
import cn from 'classnames';

interface DisplayCardProps {
  reset: string;
  tipAmount: number;
  total: number;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
}

const DisplayCard: FC<DisplayCardProps> = ({
  reset,
  tipAmount,
  total,
  onClick,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.amount}>
        <div className={styles.text}>
          <h4 className={styles.title}>Tip Amount</h4>
          <p className={styles.subTitle}>/ person</p>
        </div>
        <div className={styles.number}>
          {!tipAmount ? (
            <h1 className={styles.value}>$0.00</h1>
          ) : (
            <h1 className={styles.value}>${tipAmount.toPrecision(3)}</h1>
          )}
        </div>
      </div>

      <div className={styles.total}>
        <div className={styles.text}>
          <h4 className={styles.title}>Total</h4>
          <p className={styles.subTitle}>/ person</p>
        </div>
        <div className={styles.number}>
          {!total ? (
            <h1 className={styles.value}>$0.00</h1>
          ) : (
            <h1 className={styles.value}>${total.toPrecision(3)}</h1>
          )}
        </div>
      </div>

      <button
        onClick={onClick}
        className={cn(styles.button, {
          [styles.active]: tipAmount > 0,
        })}
      >
        {reset}
      </button>
    </div>
  );
};
export default DisplayCard;
