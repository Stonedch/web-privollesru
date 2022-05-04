import React from 'react';
import styles from './Footer.module.scss';
import { CreatedBy } from './CreatedBy';
import { Contacts } from './Contacts';

function Footer() {
    return (
        <footer className={styles.footer}>
            <Contacts />
            <CreatedBy />
        </footer>
    );
}

export { Footer };
