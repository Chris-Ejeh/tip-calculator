import { FC, FormEventHandler, useState } from 'react';
import TipButton from '../Button/TipButton';
import DisplayCard from '../DisplayCard/DisplayCard';

import { useForm } from '../utils/useForm';

import styles from './Card.module.scss';

const ButtonValues = ['5', '10', '15', '25', '50'];

interface CardProps {
  reset: string;
}

interface FormProps {
  bill: number;
  people: number;
}

export const Card: FC<CardProps> = ({ reset }) => {
  const [tip, setTip] = useState(0);
  const [amount, setAmount] = useState(0);
  const [total, setTotal] = useState(0);
  const { inputs, handleChange, resetForm } = useForm<FormProps>({
    bill: 0,
    people: 0,
  });

  const getTipPercentage = (num: number) => {
    setTip(num);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setAmount(((inputs.bill / inputs.people) * tip) / 100);
    setTotal(inputs.bill / inputs.people);
  };

  return (
    <div className={styles.container}>
      <div className={styles.inputCard}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label htmlFor="bill">
            Bill
            <input
              className={styles.inputField}
              type="text"
              name="bill"
              placeholder="0"
              value={inputs.bill}
              onChange={handleChange}
            />
          </label>

          <div className={styles.percentageButton}>
            <p className={styles.title}>Select Tip %</p>
            <div className={styles.buttonContainer}>
              {ButtonValues.map((num, index) => (
                <TipButton
                  key={index}
                  value={num}
                  onClick={() => getTipPercentage(parseFloat(num))}
                />
              ))}
              <button contentEditable={true} className={styles.button}>
                Custom
              </button>
            </div>
          </div>

          <label htmlFor="people">
            Number of People
            <input
              className={styles.inputField}
              type="text"
              name="people"
              placeholder="0"
              value={inputs.people}
              onChange={handleChange}
            />
          </label>
        </form>
      </div>

      <DisplayCard
        reset={reset}
        tipAmount={amount}
        total={total}
        onClick={() => {
          resetForm();
          setAmount(0);
          setTotal(0);
        }}
      />
    </div>
  );
};
