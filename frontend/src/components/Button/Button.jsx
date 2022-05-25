import React from 'react';
import styles from './Button.module.scss';

function Button(props) {
    const { onClick, opacity, children } = props;

    return (
        <div
            className={[styles.button, opacity ? styles.opacity : null].join(
                ' '
            )}
            onClick={onClick}
        >
            {children}
        </div>
    );
}

export { Button };
