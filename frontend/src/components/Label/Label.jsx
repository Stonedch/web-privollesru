import React from 'react';
import styles from './Label.module.scss';

function Label(props) {
    const { title, children } = props;

    return (
        <label className={styles.label}>
            <span>{title}</span>
            {children}
        </label>
    );
}

export { Label };
