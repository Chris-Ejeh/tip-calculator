import { FC, FormEventHandler, useState } from 'react';
import TipButton from '../Button/TipButton';
import DisplayCard from '../DisplayCard/DisplayCard';

import { useForm } from '../../utils/useForm';
import { BiDollar } from 'react-icons/bi';
import { BsFillPersonFill } from 'react-icons/bs';

import styles from './Card.module.scss';
import InputForm from '../InputForm/InputForm';
import { getNumberedInputs } from '../../utils/funcs';

const cn = require('classnames');

const ButtonValues = ['5', '10', '15', '25', '50'];

interface CardProps {
    reset: string;
}

interface FormProps {
    bill: string;
    people: string;
}

export const Card: FC<CardProps> = ({ reset }) => {
    const [tip, setTip] = useState(0);
    const [amount, setAmount] = useState(0);
    const [total, setTotal] = useState(0);
    const [error, setError] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const { inputs, handleChange, resetForm } = useForm<FormProps>({
        bill: '',
        people: '',
    });

    const getTipPercentage = (num: number) => {
        setTip(num);
        setIsActive(true);
    };

    const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();

        const people = getNumberedInputs(inputs.people);
        const bill = getNumberedInputs(inputs.bill);

        !inputs?.people
            ? (setError(true), setIsActive(false))
            : (setError(false), setAmount(((bill / people) * tip) / 100), setTotal(bill / people));
    };

    return (
        <div className={styles.wrapper}>
            <div className={cn('container', styles.container)}>
                <div className={styles.inputCard}>
                    <form id="form" aria-label="Add a number" className={styles.form} onSubmit={handleSubmit}>
                        <InputForm
                            title="bill"
                            label="Bill"
                            value={inputs.bill}
                            onChange={handleChange}
                            icon={<BiDollar className={styles.icon} />}
                        />

                        <div className={styles.percentageButton}>
                            <p className={styles.title}>Select Tip %</p>
                            <div className={styles.buttonContainer}>
                                {ButtonValues.map((num, index) => {
                                    return (
                                        <TipButton
                                            key={index}
                                            value={num}
                                            onClick={() => getTipPercentage(parseFloat(num))}
                                        />
                                    );
                                })}
                                <button type="button" contentEditable={'true'} className={styles.button}>
                                    Custom
                                </button>
                            </div>
                        </div>

                        <InputForm
                            title="people"
                            label="Number of People"
                            value={inputs.people}
                            error={error}
                            onChange={handleChange}
                            icon={<BsFillPersonFill className={styles.icon} />}
                        />
                    </form>
                </div>
                <div className={styles.displayCard}>
                    <DisplayCard
                        reset={reset}
                        tipAmount={amount}
                        total={total}
                        onClick={() => {
                            resetForm();
                            setIsActive(false);
                            setAmount(0);
                            setTotal(0);
                        }}
                    />
                </div>
            </div>
        </div>
    );
};
