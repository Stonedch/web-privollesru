import React from 'react';
import styles from './Title.module.scss';

const Title = (props) => {
    const { title, subtitle } = props;

    return (
        <div className={styles.title}>
            <h2 className={styles.title}>{title}</h2>
            {subtitle ? <p className={styles.subtitle}>{subtitle}</p> : null}
            <div className={styles.line}></div>
        </div>
    );
};

export { Title };
