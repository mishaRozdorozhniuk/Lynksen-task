import React, {FC} from 'react';
import './Button.scss'

interface ButtonProps {
    text: string;
    className?: string;
    onClick?: () => void;
}

const Button:FC<ButtonProps> = ({text, onClick}) => {
    return (
        <button onClick={onClick} className="replace__btn">
            {text}
        </button>
    );
};

export default Button;