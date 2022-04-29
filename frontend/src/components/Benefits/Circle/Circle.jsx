import React from 'react';
import styles from './Circle.module.scss';

function Circle(props) {
    const { title, subtitle, children } = props;
    return (
        <div className={styles.circle}>
            <div className={styles.icon}>
                {children}
            </div>
            <div className={styles.body}>
                <h4 className={styles.title}>{title}</h4>
                <h5 className={styles.subtitle}>{subtitle}</h5>
            </div>
        </div>
    );
}

export { Circle };

