import React, { useState } from 'react';
import styles from './Header.module.scss';
import { Brand } from 'components/Brand';
import { CompanyInfo } from 'components/CompanyInfo';
import { CallbackModalForm } from 'components/CallbackModalForm';
import { Nav } from './Nav';

const Header = () => {
    return (
        <header className={[styles.header, styles.screen].join(' ')}>
            <div className={styles.content}>
                <div className={styles.top}>
                    <Brand href='/' />
                    <div className={styles.right}>
                        <Nav />
                        <CompanyInfo className={styles.info} />
                    </div>
                </div>
                <div className={styles.bottom}>
                    <h1 className={styles.title}>
                        Приволжская лесная компания
                    </h1>
                    <h2 className={styles.subtitle}>
                        Поставляем качественный лес и пиломатериалы
                    </h2>
                    <span className={styles.additional}>
                        В любых количествах точно в срок по РФ и на экспорт.
                    </span>
                    <CallbackModalForm title='Каталог продукции' />
                </div>
            </div>
        </header>
    );
};

export { Header };
