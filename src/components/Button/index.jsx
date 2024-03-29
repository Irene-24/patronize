import React from 'react';
import classNames from "classnames";
import styles from './Button.module.scss';

const Button = ( {
    className,
    onClick,
    children,
    type = "button",
    ...props
} ) =>
{
    return (
        <button
            type={ type }
            onClick={ onClick }
            className={ classNames( styles.button, className ) }
            { ...props }>
            { children }
        </button>
    );
};

export { Button };
