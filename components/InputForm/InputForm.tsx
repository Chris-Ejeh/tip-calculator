import { ChangeEventHandler, FC, FormEventHandler } from 'react';
import styles from './InputForm.module.scss';

interface FormProps {
    title: string;
    icon: JSX.Element;
    label: string | number | readonly string[] | undefined;
    error?: boolean;
    value: string | undefined;
    onChange: ChangeEventHandler<HTMLInputElement> | undefined;
}

const InputForm: FC<FormProps> = ({ title, icon, label, error, value, onChange }) => {
    return (
        <>
            <label htmlFor={title} role="form" className={styles.label}>
                {label}
                {error ? <p className={styles.error}>Can't be Zero</p> : null}
            </label>
            <div className={styles.inputContainer}>
                {icon}
                <input
                    className={styles.inputField}
                    id={title}
                    type="text"
                    role="form"
                    name={title}
                    placeholder="0"
                    value={value}
                    onChange={onChange}
                />
            </div>
        </>
    );
};

export default InputForm;
