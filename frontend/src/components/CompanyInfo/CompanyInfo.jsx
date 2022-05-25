import React from 'react';
import styles from './CompanyInfo.module.scss';

function CompanyInfo(props) {
    const { className } = props;

    return (
        <div className={`${styles.info} ${className}`}>
            <div className={styles.top}>
                <a href='tel:+79877575718'>+7 (987) 757-57-18</a>
                <a href='tel:+79103866661'>+7 (910) 386-66-61</a>
            </div>
            <div className={styles.bottom}>
                <span>пн-вс, 08:00-18:00 (по МСК)</span>
            </div>
        </div>
    );
}

export { CompanyInfo };
