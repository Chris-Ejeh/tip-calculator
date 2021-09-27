import { FC, MouseEventHandler } from 'react';
import styles from './DisplayCard.module.scss';
const cn = require('classnames');

interface DisplayCardProps {
    reset: string;
    tipAmount: number;
    total: number;
    onClick: MouseEventHandler<HTMLButtonElement> | undefined;
}

const DisplayCard: FC<DisplayCardProps> = ({ reset, tipAmount, total, onClick }) => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.text}>
                    <h2 className={styles.title}>Tip Amount</h2>
                    <p className={styles.subTitle}>/ person</p>
                </div>
                <div className={styles.number}>
                    {!tipAmount ? (
                        <p className={styles.value}>$0.00</p>
                    ) : (
                        <p className={styles.value}>${tipAmount.toPrecision(3)}</p>
                    )}
                </div>
            </div>

            <div className={styles.infoContainer}>
                <div className={styles.text}>
                    <h2 className={styles.title}>Total</h2>
                    <p className={styles.subTitle}>/ person</p>
                </div>
                <div className={styles.number}>
                    {!total ? (
                        <p className={styles.value}>$0.00</p>
                    ) : (
                        <p className={styles.value}>${total.toPrecision(3)}</p>
                    )}
                </div>
            </div>

            <button
                onClick={onClick}
                className={cn(styles.button, {
                    [styles.active]: tipAmount > 0,
                })}>
                {reset}
            </button>
        </div>
    );
};
export default DisplayCard;
