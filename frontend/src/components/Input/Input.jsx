import React from 'react';
import styles from './Input.module.scss';

function Input(props) {
    const { name, type, value, placeholder, onChange } = props;

    return (
        <input
            className={styles.input}
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange ? onChange : null}
        />
    );
}

export { Input };
