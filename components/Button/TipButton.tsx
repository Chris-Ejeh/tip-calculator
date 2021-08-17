import { FC } from 'react';
import { values } from 'underscore';
import styles from './TipButton.module.scss';

interface TipButtonProps {
  value: string[];
}

const TipButton: FC<TipButtonProps> = ({ value }) => {
  return (
    <div className={styles.buttonContainer}>
      {value.map((num) => (
        <button onClick={() => console.log(num)} className={styles.button}>
          {num}
        </button>
      ))}
    </div>
  );
};

export default TipButton;
