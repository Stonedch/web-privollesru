import React from 'react';
import styles from './CreatedBy.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function CreatedBy() {
    return (
        <div className={styles.createdby}>
            <a href="https://github.com/stonedch/">
                Created by <FontAwesomeIcon icon={ faGithub } /> stonedch
            </a>
        </div>
    );
}

export { CreatedBy };

