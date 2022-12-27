import { ChangeEventHandler, FC, FormEventHandler } from 'react'
import styles from './InputForm.module.scss'

const cn = require('classnames')
interface FormProps {
    title: string
    icon?: JSX.Element
    label?: string | number | readonly string[] | undefined
    error?: boolean
    value?: string | undefined
    placeholder?: string
    className?: string
    onChange: ChangeEventHandler<HTMLInputElement> | undefined
}

const InputForm: FC<FormProps> = ({
    title,
    icon,
    label,
    error,
    value,
    placeholder,
    className,
    onChange,
}) => {
    return (
        <>
            <label htmlFor={title} className={styles.label}>
                {label}
                {error ? <p className={styles.error}>Can't be Zero</p> : null}
                {value && !Number(value) ? (
                    <p className={styles.error}>Can't be letters</p>
                ) : null}
            </label>
            <div className={cn(styles.inputContainer, className)}>
                {icon}
                <input
                    className={styles.inputField}
                    id={title}
                    name={title}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
            </div>
        </>
    )
}

export default InputForm
