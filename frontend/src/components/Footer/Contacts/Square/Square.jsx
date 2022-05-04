import React from 'react';
import styles from './Square.module.scss';

function Square(props) {
    const { icon, title, children } = props;

    return (
        <div className={styles.square}>
            <div className={styles.icon}>{icon}</div>
            <h4 className={styles.title}>{title}</h4>
            {children}
        </div>
    );
}

export { Square };
