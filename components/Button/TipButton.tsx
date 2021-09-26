import { FC, MouseEventHandler } from 'react';
import styles from './TipButton.module.scss';

const cn = require('classnames');
interface TipButtonProps {
    value: string;
    className?: string;

    onClick: MouseEventHandler<HTMLButtonElement> | undefined;
}

const TipButton: FC<TipButtonProps> = ({ value, className, onClick }) => {
    return (
        <>
            <button type="submit" onClick={onClick} className={cn(styles.button, className)}>
                {parseFloat(value)}%
            </button>
        </>
    );
};

export default TipButton;
