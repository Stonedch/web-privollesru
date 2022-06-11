import React from 'react';
import styles from './Input.module.scss';
import InputMask from 'react-input-mask';

const Input = (props) => {
    return <InputMask className={styles.input} {...props} />;
};

export { Input };
