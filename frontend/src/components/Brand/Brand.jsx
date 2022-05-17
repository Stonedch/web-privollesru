import React from 'react';
import styles from './Brand.module.scss';
import logotype from 'assets/brand/logotype-white.svg';

function Brand(props) {
    const { href, alt } = props;

    return (
        <a className={styles.brand} href={href}>
            <img src={logotype} alt={alt ? alt : 'logotype'} />
        </a>
    );
}

export { Brand };
