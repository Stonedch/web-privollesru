import React, { useState } from 'react';
import styles from './Item.module.scss';

const Item = (props) => {
    const {title, children} = props;
    const [active, setActive] = useState(true);

    const toggle = () => {
        setActive(!active);
    }

    const itemStyles = active ? (
        `${styles.item} ${styles.active}`
    ) : (
        `${styles.item}`
    );

    return (
        <div className={itemStyles}>
            <div className={styles.header} onClick={() => toggle()}>
                <span className={styles.title}>
                    {title}
                </span>
                <div className={styles.button}></div>
            </div>
            <div className={styles.body}>
                <p>{children}</p>
            </div>
        </div>
    );
}

export { Item };
