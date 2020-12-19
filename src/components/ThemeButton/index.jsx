import './themeButton.scss';
import React from 'react';

export const Button = (props) => {
    const { label, onClick } = props;

    return (
        <button onClick={onClick} className='theme-button dark-mode'>
            {label}
        </button>
    );
};