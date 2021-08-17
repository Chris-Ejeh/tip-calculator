import { FC } from 'react';
import styles from './ResetButton.module.scss';

interface ResetButtonProps {
  reset: string;
}

const ResetButton: FC<ResetButtonProps> = ({ reset }) => {
  return (
    <button onClick={() => console.log(reset)} className={styles.button}>
      {reset}
    </button>
  );
};

export default ResetButton;
