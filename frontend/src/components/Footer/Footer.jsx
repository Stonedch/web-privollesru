import React from 'react';
import styles from './Footer.module.scss';
import { CreatedBy } from './CreatedBy';

function Footer() {
    return (
        <footer className={styles.footer}>
            <CreatedBy />
        </footer>
    );
}

export { Footer };

