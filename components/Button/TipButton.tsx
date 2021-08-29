import { FC, MouseEventHandler } from 'react';
import styles from './TipButton.module.scss';

interface TipButtonProps {
  value: string;

  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
}

const TipButton: FC<TipButtonProps> = ({ value, onClick }) => {
  return (
    <>
      <button type="submit" onClick={onClick} className={styles.button}>
        {parseFloat(value)}%
      </button>
    </>
  );
};

export default TipButton;
