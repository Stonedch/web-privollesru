import React from 'react';
import styles from './Contacts.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Square } from './Square';

function Contacts() {
    return (
        <div className={[styles.contacts, styles.screen].join(' ')}>
            <div className={styles.content}>
                <Square
                    icon=<FontAwesomeIcon icon={ faLocationDot } />
                    title='Наш офис'
                >
                    <p>г. Бор, Стеклозаводское ш., д. 3, к. 1, оф. 307</p>
                </Square>
                <Square
                    icon=<FontAwesomeIcon icon={ faPhone } />
                    title='Номера телефона'
                >
                    <a href='tel: +79877575718'>+7 (987) 757-57-18</a>
                    <a href='tel: +79103866661'>+7 (910) 386-66-61</a>
                </Square>
                <Square
                    icon=<FontAwesomeIcon icon={ faEnvelope } />
                    title='Email'
                >
                    <a href='mailto: lst-nn@bk.ru'>lst-nn@bk.ru</a>
                </Square>
            </div>
        </div>
    );
}

export { Contacts };
