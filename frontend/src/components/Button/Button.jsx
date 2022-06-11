import React from 'react';
import styles from './Button.module.scss';

const Button = (props) => {
    const { onClick, opacity, type, children } = props;

    return (
        <button
            className={[styles.button, opacity ? styles.opacity : null].join(
                ' '
            )}
            onClick={onClick}
            type={type ? type : null}
        >
            {children}
        </button>
    );
};

export { Button };
