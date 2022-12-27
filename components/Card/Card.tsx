import { FC, FormEventHandler, useState } from 'react'
import TipButton from '../Button/TipButton'
import ResultCard from '../ResultCard/ResultCard'

import { useForm } from '../../utils/useForm'
import { BiDollar } from 'react-icons/bi'
import { BsFillPersonFill } from 'react-icons/bs'

import styles from './Card.module.scss'
import InputForm from '../InputForm/InputForm'
import { getNumberedInputs } from '../../utils/funcs'

const cn = require('classnames')

let ButtonValues = [
    { num: '5', active: false },
    { num: '10', active: false },
    { num: '15', active: false },
    { num: '25', active: false },
    { num: '50', active: false },
]

interface CardProps {
    reset: string
}

interface FormProps {
    bill: string
    people: string
}

export const Card: FC<CardProps> = ({ reset }) => {
    const [tip, setTip] = useState(0)
    const [amount, setAmount] = useState(0)
    const [total, setTotal] = useState(0)
    const [error, setError] = useState(false)
    const [isActive, setIsActive] = useState(false)
    const { inputs, handleChange, resetForm } = useForm<FormProps>({
        bill: '',
        people: '',
    })

    const getTipPercentage = (num: number, active: object) => {
        setTip(num)
        setIsActive(true)
    }

    const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()

        const people = getNumberedInputs(inputs.people)
        const bill = getNumberedInputs(inputs.bill)

        !inputs?.people
            ? setError(true)
            : (setError(false),
              setAmount((tip * (bill / people)) / 100),
              setTotal(bill / people))
    }

    return (
        <div className={styles.wrapper}>
            <div className={cn('container', styles.container)}>
                <div className={styles.inputCard}>
                    <form
                        id="form"
                        aria-label="Add a number"
                        className={styles.form}
                        onSubmit={handleSubmit}
                    >
                        <InputForm
                            title="bill"
                            label="Bill"
                            value={inputs.bill}
                            error={error}
                            placeholder="0"
                            onChange={handleChange}
                            icon={<BiDollar className={styles.icon} />}
                        />

                        <InputForm
                            title="people"
                            label="Number of People"
                            value={inputs.people}
                            error={error}
                            placeholder="0"
                            onChange={handleChange}
                            icon={<BsFillPersonFill className={styles.icon} />}
                        />

                        <div className={styles.percentageButton}>
                            <p className={styles.title}>Select Tip %</p>
                            <div className={styles.buttonContainer}>
                                {ButtonValues.map((value, index) => {
                                    if (
                                        parseFloat(value.num) === tip &&
                                        isActive
                                    ) {
                                        value.active = true
                                    } else {
                                        value.active = false
                                    }

                                    return (
                                        <TipButton
                                            key={index}
                                            value={value.num}
                                            onClick={() =>
                                                getTipPercentage(
                                                    parseFloat(value.num),
                                                    value
                                                )
                                            }
                                            className={cn({
                                                [styles.buttonActive]:
                                                    value.active,
                                            })}
                                        />
                                    )
                                })}
                                <button type="button" className={styles.button}>
                                    Custom
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className={styles.resultCard}>
                    <ResultCard
                        reset={reset}
                        tipAmount={amount}
                        total={total}
                        onClick={() => {
                            resetForm()
                            setIsActive(false)
                            setAmount(0)
                            setTotal(0)
                        }}
                    />
                </div>
            </div>
        </div>
    )
}
