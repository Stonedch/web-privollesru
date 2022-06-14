import React from 'react';
import styles from './Button.module.scss';

const Button = (props) => {
    const { onClick, opacity, type, className, children } = props;

    return (
        <button
            className={[
                styles.button,
                { ...className },
                opacity ? styles.opacity : null,
            ].join(' ')}
            onClick={onClick}
            type={type ? type : null}
        >
            {children}
        </button>
    );
};

export { Button };
