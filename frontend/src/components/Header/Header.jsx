import React from 'react';
import styles from './Header.module.scss';
import { Brand } from 'components/Brand';

function Header() {
    return (
        <header className={[styles.header, styles.screen].join(' ')}>
            <div className={styles.content}>
                <div className={styles.top}>
                    <Brand href='/' />

                    <div className={styles.info}>
                        <div className={styles.top}>
                            <a href='tel:+79877575718'>+7 (987) 757-57-18</a>
                            <a href='tel:+79103866661'>+7 (910) 386-66-61</a>
                        </div>
                        <div className={styles.bottom}>
                            <span>пн-вс, 08:00-18:00 (по МСК)</span>
                        </div>
                    </div>
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

