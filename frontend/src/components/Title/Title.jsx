import React from 'react';
import styles from './Title.module.scss';

function Title(props) {
    const {title, subtitle} = props;

    return (
        <div className={styles.title}>
            <h2>{title}</h2>
            {subtitle ? (
                <p>{subtitle}</p>
            ) : null}
            <div className={styles.line}></div>
        </div>
    );
}

export { Title };
