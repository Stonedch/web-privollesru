import React from 'react';
import styles from './Footer.module.scss';
import { CreatedBy } from './CreatedBy';
import { Contacts } from './Contacts';
import { Map } from './Map';


const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Contacts />
            <Map />
            <CreatedBy />
        </footer>
    );
};

export { Footer };
