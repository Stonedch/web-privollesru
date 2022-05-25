import React from 'react';
import styles from './Item.module.scss';
import { Button } from 'components/Button';

const Item = (props) => {
    const { background, title, subtitle, additional, buttonOnClick } = props;

    return (
        <div className={styles.card}>
            <div className={styles.background}>
                <img src={background} alt='slide' />
            </div>
            <div className={styles.body}>
                <h3 className={styles.title}>{title}</h3>
                <h4 className={styles.subtitle}>{subtitle}</h4>
                <div className={styles.additional}>
                    {additional.map((item) => (
                        <div className={styles.item}>
                            <h5 className={styles.title}>{item['title']}</h5>
                            <p className={styles.desc}>{item['desc']}</p>
                        </div>
                    ))}
                </div>
                <Button opacity={true} onClick={buttonOnClick}>
                    Узнать цены
                </Button>
            </div>
        </div>
    );
};

export { Item };
