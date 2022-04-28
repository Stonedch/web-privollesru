import React from 'react';
import styles from './Header.module.scss';
import { Brand } from 'components/Brand';
import { CompanyInfo } from 'components/CompanyInfo';

function Header() {
    return (
        <header className={[styles.header, styles.screen].join(' ')}>
            <div className={styles.content}>
                <div className={styles.top}>
                    <Brand href='/' />
                    <CompanyInfo />
                </div>
                <div className={styles.bottom}>
                    <h1 className={styles.title}>Приволжская лесная компания</h1>
                    <h2 className={styles.subtitle}>Поставляем качественный лес и пиломатериалы</h2>
                    <span className={styles.additional}>В любых количествах точно в срок по РФ и на экспорт.</span>
                </div>
            </div>
        </header>
    );
}

export { Header };

